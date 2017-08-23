var fs =  require('fs');
var data = '';

var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk){
    // console.log('data event handler');
    data += chunk;
});

readStream.on('end', function(){
  // console.log('end event handler');
  console.log(data);
});

readStream.on('error', function(err){
  console.log(err.stack);
});

console.log('App exit');
