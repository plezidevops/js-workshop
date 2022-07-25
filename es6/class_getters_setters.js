class Person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }

  get personFirstName() {
    console.log("The get method is called.");
    return this.firstName;
  };

  set personFirstName(fname) {
    console.log("The set method is called.");
    this.lastName = fname;
  }
}

person = new Person('Paulette', 'Jean');
person.personFirstName = "Jude";

console.log(person.personFirstName);

/*
NOTE: The name of the getter and the setter method cannot be the same as the name of the property.
*/