import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { spawn } from 'node:child_process';

function phpContactApiPlugin(): Plugin {
  return {
    name: 'php-contact-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'POST' && (req.url === '/api/contact.php' || req.url === '/api/contact')) {
          let body = '';
          req.on('data', (chunk: Buffer) => {
            body += chunk;
          });
          req.on('end', () => {
            const php = spawn('php', ['public/api/contact.php'], {
              env: { ...process.env, REQUEST_METHOD: 'POST' }
            });

            let stdout = '';
            let stderr = '';

            php.stdout.on('data', (d: Buffer) => { stdout += d.toString(); });
            php.stderr.on('data', (d: Buffer) => { stderr += d.toString(); });

            php.on('close', (code: number) => {
              if (stderr) {
                console.error('[contact.php stderr]:', stderr);
              }
              const jsonStart = stdout.indexOf('{');
              const jsonStr = jsonStart !== -1 ? stdout.slice(jsonStart) : stdout;

              res.setHeader('Content-Type', 'application/json');
              res.writeHead(code === 0 ? 200 : 500);
              res.end(jsonStr || JSON.stringify({ ok: false, error: 'Internal PHP error' }));
            });

            php.stdin.write(body);
            php.stdin.end();
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), phpContactApiPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});
