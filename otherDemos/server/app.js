var http = require('http');
var fs = require('fs');

var data = '';
var readerStream = fs.createReadStream('index.html');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk){
  data += chunk;
});

readerStream.on('end', function(){
  console.log('read file end');
  console.log('content is', data);
});

readerStream.on('error', function(err){
  console.log('read file failed', err.stack);
});

var onRequest = function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html;'});
  response.write(data);
  response.end();
};
http.createServer(onRequest).listen(8086);
