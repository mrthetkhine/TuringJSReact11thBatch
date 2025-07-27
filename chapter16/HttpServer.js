const http = require('node:http');
const server = http.createServer((req, res) => {
    console.log('url ',req.url);
    console.log('Req headers ',req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Server is running!</h1>');
});

// Start server listening on port 8080
server.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});