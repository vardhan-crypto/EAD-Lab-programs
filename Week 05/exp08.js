function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function compose(f, g, value) {
  let resultFromG = g(value);
  return f(resultFromG);
}

console.log(compose(double, square, 3));