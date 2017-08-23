var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

var writerStream = fs.createWriteStream('pipe_output.txt');

readerStream.pipe(writerStream);

writerStream.on('finish', function(){
  console.log('write finish');
});

console.log('App exit');
