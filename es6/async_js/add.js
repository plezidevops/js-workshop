const add = (num1, num2, callback) => {

  setTimeout(() => {
    callback(num1 + num2);
  }, 200);

};

add(1, 4, sum => {
  console.log(sum);
});