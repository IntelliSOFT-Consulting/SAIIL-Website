<?php
/**
 * SAIIL Contact Form Configuration
 * 
 * Instructions:
 * 1. Copy this file to config.php (in the same directory):
 *    cp config.example.php config.php
 * 2. Fill in your Gmail address and 16-character Google App Password.
 *    (Generate an App Password at: https://myaccount.google.com/apppasswords)
 */

if (!defined('SAIIL_APP')) {
    http_response_code(403);
    exit('Access Denied');
}

return [
    // Google SMTP Settings
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 465,
    'smtp_user' => 'davidmukungi@saiil.africa',
    
    // 16-character Google App Password (e.g., 'abcd efgh ijkl mnop')
    'smtp_pass' => '',
    
    // Recipient email where contact form submissions are delivered
    'to_email'  => 'davidmukungi@saiil.africa',
    'to_name'   => 'SAIIL Team',
    'from_name' => 'SAIIL Website Contact Form',
];
