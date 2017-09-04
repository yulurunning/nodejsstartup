// 使用偏函数

var toString = Object.prototype.toString;

var isString = function(obj) {
    return toString.call(obj) == '[object String]';
};

var isFunction = function(obj) {
    return toString.call(obj) == '[object Function]';
}

console.log(isString(1));
console.log(isFunction(function() {}));


var isType = function(type) {
  return function(obj) {
    return toString.call(obj) == '[object '+ type+ ']';
  }
}
isString = isType('String');
isFunction = isType('Function');

console.log(isString(1));
console.log(isFunction(function() {}));
