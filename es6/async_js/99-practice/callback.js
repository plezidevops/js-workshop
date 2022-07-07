function greet(fullName) {
  console.log(fullName);
}

function MyName(fullName, callback) {
  const text = fullName.split("");
  callback(text);
}

MyName('Pascal', greet);