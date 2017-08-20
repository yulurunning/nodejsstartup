exports.add = function() {
  var sum =0;
  var args = arguments;
  for (var i=0;i<args.length;i++) {
    sum += args[i];
  }
  return sum;
}
