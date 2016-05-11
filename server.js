'use strict';

var http = require('http');
var ip = require('ip');
var PORT = 8080;

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
    response.write('Hello from server at ' + ip.address() + '!!!');
      response.end();
});

server.listen(PORT, function(){
    console.log('server loaded at ' + ip.address());
});
