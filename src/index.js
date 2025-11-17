const http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Blogify API\n');
}).listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

// Graceful shutdown
function shutdown(signal) {
  console.log(`Received ${signal}. Closing server...`);
  server.close(err => {
    if (err) {
      console.error('Error closing server:', err);
      process.exit(1);
    }
    console.log('Server closed. BROOO');
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
