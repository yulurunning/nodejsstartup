const http = require('http');
const url = require('url');

var serverHandler = function(request, response) {
  request.setEncoding('utf8');

  var totalData = '';
  request.on('data', (chunk) => {
    console.log('Receive chunk:', chunk);
    if (chunk != '') {
      totalData += chunk;
    }
  });

  request.on('end', function(){
    response.writeHead(200, {'Content-Type': 'text/html, chartset=utf-8'});
    if (totalData != '') {
      console.log('write:' + totalData.toString());
      response.write('<h1>');
      response.write(totalData.toString());
      response.write('</h1>');
    }
    else {
      response.write('<h1>Hello World</h1>');
    }
    response.end();
  });
};

http.createServer(serverHandler).listen(8080);
console.log('Server start success');
