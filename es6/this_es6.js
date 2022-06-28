let person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    console.log(`Outer: ${this.firstName} ${this.lastName}`);
    let print = function () {
      console.log(`Inner: ${this.firstName} ${this.lastName}`);
    };
    print();
  }
};

// this is referred to the owener of the function. The owner of getFullName is person
// who is the owner of print()?
// The owner of print() is getFullName(), but getFullName has no properties firstName and lastName
person.getFullName(); //=> Outer: John Doe Inner: undefined undefined

// How to solve the inner function problem
// arrow function does not have their own this. the parent this value is used.
// But why the inner function now works?
// Since the annonymous function doesn't have this. the arrow function uses the object (person) this
person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    console.log(`Outer: ${this.firstName} ${this.lastName}`);
    let print = () => {
      console.log(`Inner: ${this.firstName} ${this.lastName}`);
    };
    print();
  }
};

person.getFullName();