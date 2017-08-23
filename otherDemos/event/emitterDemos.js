var events = require('events');
var eventEmitter = new events.EventEmitter();

var EVENT_NAME = 'someEvent';

var listener1 = function (){
  console.log('事件处理器1触发');
}

var listener2 = function (){
  console.log('事件处理器2触发');
}

var listener3 = function (){
  console.log('事件处理器3触发');
}

eventEmitter.on(EVENT_NAME, listener1);
eventEmitter.addListener(EVENT_NAME, listener2);
eventEmitter.once(EVENT_NAME, listener3);

var listenerCount = events.EventEmitter.listenerCount(eventEmitter, EVENT_NAME);
console.log(EVENT_NAME + ' listener count=' + listenerCount);

eventEmitter.emit(EVENT_NAME);

eventEmitter.removeListener(EVENT_NAME, listener2);
listenerCount = events.EventEmitter.listenerCount(eventEmitter, EVENT_NAME);
console.log(EVENT_NAME + ' listener count=' + listenerCount);

console.log('App exit');
