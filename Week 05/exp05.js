function filterEven(numbers) {
  return numbers.filter(n => n % 2 === 0);
}

const nums = [1, 2, 3, 4, 5];
const squares = nums.map(x => x * x);

console.log(filterEven([1, 2, 3, 4, 5, 6]));
console.log(squares);