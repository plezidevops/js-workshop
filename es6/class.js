class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName = () => {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

let father = new Person('John', 'Doe');
father.getFullName();
console.log(father.firstName);

// Satic method
class Area {
  constructor(number) {
    this.number = number;
  }

  static toTwoDecimals = number => {
    console.log(number.toFixed(2));
  };
}

Area.toTwoDecimals(123.457801);

