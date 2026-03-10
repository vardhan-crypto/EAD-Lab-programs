function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibIterative(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.time("Iterative");
console.log(fibIterative(40));
console.timeEnd("Iterative");

console.time("Recursive");
console.log(fibRecursive(40));
console.timeEnd("Recursive");