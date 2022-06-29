const fullNames = [
  { first: 'Albus', last: 'Dumbledore' },
  { first: 'Harry', last: 'Potter' },
  { first: 'Hermione', last: 'Granger' },
  { first: 'Ron', last: 'Weasley' },
  { first: 'Rubeus', last: 'Hagrid' },
  { first: 'Minerva', last: 'McGonagall' },
  { first: 'Severus', last: 'Snape' }
];

// return an array of all the first names
let firstNames = fullNames.map(firstName => firstName.first);
console.log(firstNames);

// return an array of all the first name that starts with h
firstNames = fullNames.filter(name => name.first.startsWith('H'));
console.log(firstNames);

// calculate the sum
let grades = [90, 89, 78, 67,];
const sum = grades.reduce((total, number) => total += number);
console.log(sum);
