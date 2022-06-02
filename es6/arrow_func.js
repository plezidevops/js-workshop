const fullName = (first, last) => first + ' ' + last;
console.log(fullName('Pascal', 'Juste'));

const createUser = (name, email) => ({
  name,
  email,
  createdAt: Date.now()
});
console.log(createUser('Jane', 'jane@gmail.com'));
