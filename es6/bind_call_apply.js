/*
Rememebr this belongs to the owner of the function. So this belongs to person
But for var getFullName = person.getFullName, this belongs to the global object
Since no firstName and lastName are declared in global, you get an ubdefined
*/
let person = {
  firstName: 'Jude',
  lastName: 'Pierre',
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

var getFullName = person.getFullName;
getFullName();

// Using bind to fix this issue
/*
How does bind work:
  - bind creates a copy of the function (the annonymous function or getFullName)
  - then bind sets the 'this' keyword to the person object
*/
var getFullName2 = person.getFullName.bind(person);
getFullName2();

// Using call to fix the issue
/*
How does call work
  - call does not create a copy of the function
  - call set this to the object person and person1
  - with call the function is immediatly invoked
*/
person = {
  firstName: 'Jude',
  lastName: 'Pierre',
  getFullName: function (city, country) {
    console.log(`${this.firstName} ${this.lastName} from ${city} ${country}`);
  }
};

person1 = {
  firstName: 'Pascal',
  lastName: 'Pierre'
};

person.getFullName.call(person);
person.getFullName.call(person1);
person.getFullName.call(person1, 'Jeremie', 'Haiti');

// Using apply to fix the same issue
/*
How does apply work
  - call does not create a copy of the function
  - call set this to the object person and person1
  - with call the function is immediatly invoked
  - you need to pass arguments as an array
*/
person = {
  // firstName: 'Jude',
  // lastName: 'Pierre',
  getFullName: function (city, country) {
    console.log(`${this.firstName} ${this.lastName} is from ${city}, ${country}`);
  }
};

person.getFullName.apply(person1, ['La Valle', 'Jacmel']);