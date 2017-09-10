var points = [40, 100, 1, 5, 23, 10];
console.log(points);

points.sort(function(a, b) {
  return a - b;
});
console.log(points);

points.sort(function(a, b) {
  return b - a;
});
console.log(points);
