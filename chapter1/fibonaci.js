for (var i = 0; i < 40; i++) {
  console.log('n=' + i + ', result=' + fibonaci(i));
}

function fibonaci(n) {
  if (n == 0) {
    return 0;
  }
  else if (n == 1) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
