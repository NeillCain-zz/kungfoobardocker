'use strict';

const http = require('http');
const ip = require('ip');
const PORT = 8080;

const server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
    response.write('Hello from server at ' + ip.address() + '!!!');
      response.end();
});

server.listen(PORT, () => {
    console.log('server loaded at ' + ip.address());
});
