class Person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  getFullName = () => {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

// Inheritance
// extends to extend the base class
// super() to access the properties and methods of the parent class

class Student extends Person {
  constructor(major, first, last) {
    super(first, last);
    console.log(major, first, last);
    this.major = major;
  }

  display() {
    console.log(`My name is ${this.firstName} ${this.lastName}. I am majoring in ${this.major}`);
  }
}

const pascal = new Student('Computer Science', 'Pascal', 'Juste');
pascal.display();
pascal.getFullName();