<?php
/**
 * SAIIL Contact Form Handler
 * Open source, self-hosted endpoint that sends contact form submissions directly
 * via Google SMTP (or server mail) to the designated recipient without third-party services.
 */

// Headers for CORS and JSON response
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

$method = $_SERVER['REQUEST_METHOD'] ?? 'POST';
if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// 1. Configuration
define('SAIIL_APP', true);
$config = [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 465,
    'smtp_user' => 'methewwahome@gmail.com',
    'smtp_pass' => '', // Set your 16-character Google App Password in config.php or environment
    'to_email'  => 'davidmukungi@saiil.africa',
    'to_name'   => 'SAIIL Team',
    'from_name' => 'SAIIL Website Contact Form',
];

// Load local config if present
if (file_exists(__DIR__ . '/config.php')) {
    $localConfig = require __DIR__ . '/config.php';
    if (is_array($localConfig)) {
        $config = array_merge($config, $localConfig);
    }
}

// Environment variable overrides
$smtpHost = getenv('SMTP_HOST') ?: $config['smtp_host'];
$smtpPort = (int)(getenv('SMTP_PORT') ?: $config['smtp_port']);
$smtpUser = getenv('SMTP_USER') ?: $config['smtp_user'];
$smtpPass = getenv('SMTP_PASS') ?: $config['smtp_pass'];
$toEmail  = getenv('CONTACT_RECIPIENT') ?: $config['to_email'];
$toName   = $config['to_name'];
$fromName = $config['from_name'];

// 2. Parse incoming payload
$raw = file_get_contents('php://input');
if (empty($raw)) {
    $raw = file_get_contents('php://stdin');
}
$data = json_decode($raw, true) ?: $_POST;

$name     = trim($data['name'] ?? '');
$email    = trim($data['email'] ?? '');
$org      = trim($data['organisation'] ?? $data['org'] ?? 'Not specified');
$audience = trim($data['audience'] ?? 'Not specified');
$interest = trim($data['interest'] ?? $data['area_of_interest'] ?? 'Not specified');
$message  = trim($data['message'] ?? '');

// Honeypot spam filter
if (!empty($data['_honey']) || !empty($data['_gotcha'])) {
    echo json_encode(['ok' => true]);
    exit;
}

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please provide name, email, and message.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

// 3. Format message
$subject = "New SAIIL Inquiry from {$name}";
$bodyText = "You have received a new contact enquiry from the SAIIL website:\n\n"
          . "--------------------------------------------------\n"
          . "Name:           {$name}\n"
          . "Email:          {$email}\n"
          . "Organisation:   {$org}\n"
          . "Contacting as:  {$audience}\n"
          . "Area of Int.:   {$interest}\n"
          . "Date/Time:      " . date('Y-m-d H:i:s T') . "\n"
          . "--------------------------------------------------\n\n"
          . "Message:\n"
          . "{$message}\n\n"
          . "--\n"
          . "Sent directly via SAIIL Website Contact Form.";

// 4. Send Email via Google SMTP or fallback to PHP mail()
if (!empty($smtpPass)) {
    $result = sendGoogleSmtp($smtpHost, $smtpPort, $smtpUser, $smtpPass, $toEmail, $fromName, $subject, $bodyText, $email);
    if ($result['ok']) {
        echo json_encode(['ok' => true, 'message' => 'Email sent successfully via Google SMTP']);
        exit;
    } else {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => $result['error']]);
        exit;
    }
} else {
    // If SMTP_PASS is not yet provided, try server mail() or return notice
    $headers = [
        "From: {$fromName} <{$smtpUser}>",
        "Reply-To: {$email}",
        "X-Mailer: PHP/" . phpversion(),
        "Content-Type: text/plain; charset=UTF-8"
    ];
    
    $sent = @mail($toEmail, $subject, $bodyText, implode("\r\n", $headers));
    if ($sent) {
        echo json_encode(['ok' => true, 'message' => 'Email sent via server mail']);
        exit;
    } else {
        http_response_code(500);
        echo json_encode([
            'ok' => false,
            'error' => 'SMTP password not configured. Please set your Google App Password in public/api/config.php or as SMTP_PASS environment variable.'
        ]);
        exit;
    }
}

/**
 * Direct Google SMTP over SSL
 */
function sendGoogleSmtp($host, $port, $user, $pass, $to, $fromName, $subject, $bodyText, $replyTo) {
    $socket = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 12);
    if (!$socket) {
        return ['ok' => false, 'error' => "Cannot connect to SMTP server: {$errstr} ({$errno})"];
    }

    $read = function() use ($socket) {
        $res = '';
        while ($line = fgets($socket, 512)) {
            $res .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $res;
    };

    $send = function($cmd, $expectedCode) use ($socket, $read) {
        fwrite($socket, $cmd . "\r\n");
        $res = $read();
        $code = (int)substr($res, 0, 3);
        if ($code !== $expectedCode) {
            return ['ok' => false, 'error' => "SMTP Error on '{$cmd}': {$res}"];
        }
        return ['ok' => true, 'response' => $res];
    };

    $banner = $read();
    if ((int)substr($banner, 0, 3) !== 220) {
        fclose($socket);
        return ['ok' => false, 'error' => "Invalid SMTP banner: {$banner}"];
    }

    $r = $send("EHLO localhost", 250);
    if (!$r['ok']) { fclose($socket); return $r; }

    $r = $send("AUTH LOGIN", 334);
    if (!$r['ok']) { fclose($socket); return $r; }

    $r = $send(base64_encode($user), 334);
    if (!$r['ok']) { fclose($socket); return $r; }

    $r = $send(base64_encode($pass), 235);
    if (!$r['ok']) {
        fclose($socket);
        return ['ok' => false, 'error' => "Google SMTP authentication failed. Check your Gmail address and 16-character App Password."];
    }

    $r = $send("MAIL FROM: <{$user}>", 250);
    if (!$r['ok']) { fclose($socket); return $r; }

    $r = $send("RCPT TO: <{$to}>", 250);
    if (!$r['ok']) { fclose($socket); return $r; }

    $r = $send("DATA", 354);
    if (!$r['ok']) { fclose($socket); return $r; }

    $headers = [
        "From: =?UTF-8?B?" . base64_encode($fromName) . "?= <{$user}>",
        "Reply-To: {$replyTo}",
        "To: <{$to}>",
        "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=UTF-8",
        "Content-Transfer-Encoding: 8bit",
        "Date: " . date(DATE_RFC2822)
    ];

    $emailData = implode("\r\n", $headers) . "\r\n\r\n" . $bodyText;
    $emailData = str_replace("\r\n.", "\r\n..", $emailData);

    $r = $send($emailData . "\r\n.", 250);
    if (!$r['ok']) { fclose($socket); return $r; }

    $send("QUIT", 221);
    fclose($socket);
    return ['ok' => true];
}
