const fs = require('fs');

// Load the JSON data
const dataJSON = fs.readFileSync('2-json.json');

// Parse the data
const parseData = JSON.parse(dataJSON);

// Change the name and age
parseData.name = 'Pascal';
parseData.age = 31;

const dataStringify = JSON.stringify(parseData);

fs.writeFileSync('2-json.json', dataStringify);
