// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number = 1, value = 1,) => number + value;
console.log(increment(2, 10));