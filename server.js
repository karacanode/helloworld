var http = require('http');
var host = '127.0.0.1';
var port = '1330';
var server = http.createServer(function(request,response) {
	console.log("Gelen istek: " + request.url);
	response.writeHead(200, {'Content-type' : 'text/plain'});
	response.end("Merhaba Dunya");
});
server.listen(port,host,function() {
	console.log('Dinlenen port: ' + host + ':' + port);
});
