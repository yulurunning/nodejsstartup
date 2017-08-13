var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('someEvent', function(arg1, arg2) {
  console.log('event handler1', arg1, arg2);
});

eventEmitter.on('someEvent', function(arg1, arg2) {
  console.log('event handler2', arg1, arg2);
});

eventEmitter.emit('someEvent', 'abc', 'def');

console.log('App exit');
