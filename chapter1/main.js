var http = require('http');
var querystring = require('querystring');

// 侦听服务器的request事件
http.createServer(function(req, res){
  var postData = '';
  req.setEncoding('utf8');

  req.on('data', function(chunk){
    postData += chunk;
    console.log('receive data, chunk=', chunk);
  });

  req.on('end', function(){
    res.end(postData);
    console.log('receive end');
  });
})
.listen(8080);

console.log('服务器启动完成');
