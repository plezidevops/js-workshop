
const myObject = {
  city: 'Port-Au-Prince', //=> This is a property
  greet() {
    console.log(`Greetings from ${this.city}`); //=> this is a method
  }
};

myObject.greet();
myObject.toString();
console.log(Object.getPrototypeOf(myObject));

// Create a new object
const jude = Object.create(myObject);
jude.greet();
jude.prototype.cityName = function () {
  return this.city;
};

console.log(jude);
// Every object has a prototype
// Prototype is an object that has it own prototype


// Template to create Object Person
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}


Person.prototype.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};