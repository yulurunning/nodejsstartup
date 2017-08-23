var buf = new Buffer(20);

// Write to buffer
var len = buf.write('Hello world');
console.log('write bytes length is ', len);

// Read from buffer
console.log(buf.toString('utf-8'));
console.log(buf.toString('ascii'));
console.log(buf.toString('utf-8', 0, 5));

// JSON
console.log(buf.toJSON());

// concat buffer
var buf1 = new Buffer('hello ');
var buf2 = new Buffer('world');
var buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

// buffer compare
var buffer1 = new Buffer('a');
var buffer2 = new Buffer('a');
var buffer3 = new Buffer('b');
var result1 = buffer1.compare(buffer2);
var result2 = buffer1.compare(buffer3);
console.log('a compare to a is ', result1);
console.log('a compare to b is ', result2);
console.log('b compare to a is ', buffer3.compare(buffer1));

// copy
buf1 = new Buffer(' world');
buf2 = new Buffer(50);
buf2.write('hello');
buf1.copy(buf2, 6);
console.log('buf copy result is', buf2.toString());

// slice
buf3 = buf2.slice(2, 5);
console.log('buf slice result is', buf3.toString());

// buffer length
console.log('buffer length is', buf3.length);
