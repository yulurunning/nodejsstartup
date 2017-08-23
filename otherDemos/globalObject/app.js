console.log('current file is:', __filename);
console.log('current dir is:', __dirname);

// setTimeout
function printHello() {
  console.log('Hello, World!');
}

var t = setTimeout(printHello, 2000);
clearTimeout(t);

// setInterval
setInterval(printHello, 2000);

console.info('This is a info');

var label = 'timer';
console.time(label);

console.timeEnd(label);
