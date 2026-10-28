const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HTML_FILE = path.join(__dirname, 'rgc_react_live_dashboard.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html' || req.url.startsWith('/?')) {
    fs.readFile(HTML_FILE, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading dashboard: ' + err.message);
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache'
        });
        res.end(content);
      }
    });
    return;
  }

  const safePath = path.normalize(path.join(__dirname, req.url));
  if (safePath.startsWith(__dirname) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
    const ext = path.extname(safePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.csv': 'text/csv'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(safePath).pipe(res);
  } else {
    fs.readFile(HTML_FILE, (err, content) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    });
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`React TS Live Dashboard is running:`);
  console.log(`-> http://localhost:${PORT}`);
});
