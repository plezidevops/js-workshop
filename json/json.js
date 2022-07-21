const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
};

// Convert an object to a JSON string
const bookJSON = JSON.stringify(book);

// Convert JSON string to an object
// const parseJSON = JSON.parse(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(typeof dataBuffer);
const dataJSON = dataBuffer.toString();
console.log(typeof dataJSON);
const data = JSON.parse(dataJSON);
console.log(typeof data);

console.log(data.title);


