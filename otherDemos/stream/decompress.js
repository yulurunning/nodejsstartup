var fs = require('fs');
var zlib = require('zlib');

var writerStream = fs.createWriteStream('decompress.out.txt');

writerStream.on('finish', function(){
  console.log('decompress finish');
});

fs.createReadStream('output.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(writerStream);

console.log('App exit');
