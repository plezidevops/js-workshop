let promise = new Promise((resolve, reject) => {
  let x = 20;
  if (x > 10) {
    resolve(x);
  } else {
    reject('Too low');
  }
});

promise.then(
  value => { console.log('Success:', value); },
  error => { console.log('Error:', error); }
);


promise = new Promise((resolve, reject) => {
  resolve('Start Counting');
}).then(value => {
  console.log(value);
  return 'one';
}).then(value => {
  console.log(value);
  return 'two';
}).then(value => {
  console.log(value);
  return 'three';
}).then(value => {
  console.log(value);
  return 'four';
}).then(value => {
  console.log(value);
}).catch(value => {
  console.log(value);
});


