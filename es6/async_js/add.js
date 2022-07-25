const add = (num1, num2, callback) => {
  const sum = num1 + num2;
  callback(sum);
};

add(1, 4, sum => {
  console.log(sum);
});