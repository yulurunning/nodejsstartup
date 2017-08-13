var fs = require('fs');
var data = '谢羽是个小朋友';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function(){
  console.log('写入完成');
});

writerStream.on('error', function(err){
  console.log('写入失败', err.stack);
});

console.log('App exit');
