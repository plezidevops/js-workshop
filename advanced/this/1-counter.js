// In general, the **this** references the object of which the function is a property of. In other words, the this references the object that is currently calling the function.

/*
counter is an object with a method next()
so next is a function that is the property of the counter object
using this inside the funtion is a reference of the counter object
*/

let counter = {
  counter: 0,
  next: function () {
    return ++this.counter;
  }
};

console.log(counter.next()); //=> 1

counter = {
  counter: 0,
  next: () => ++this.counter
};

console.log(counter.next()); //=> NaN