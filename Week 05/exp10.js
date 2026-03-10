function memoize(fn) {
  let cache = {};

  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    let result = fn(n);
    cache[n] = result;
    return result;
  };
}

const memoFactorial = memoize(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(memoFactorial(5));
console.log(memoFactorial(5));