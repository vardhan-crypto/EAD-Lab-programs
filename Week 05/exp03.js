function calculator(a, b, operation) {
  switch (operation) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "multiply": return a * b;
    case "divide": return a / b;
    case "mod": return a % b;
  }
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(calculator(10, 5, "add"));
console.log(factorial(5));