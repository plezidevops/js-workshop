// Breaking an array into simple variables

// destructure an array
let colors = ['red', 'orange', 'green', 'yellow'];

let [color1, color2] = colors;

console.log('color1:', color1);
console.log('color2:', color2);

// destructure an object
let car = {
  name: 'Tesla',
  model: 'S',
  type: 'Electric'
};

let { name, wheel, type: carType } = car;
console.log(name, wheel, carType);