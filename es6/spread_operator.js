// Insert an array into anothr array
const studentNames1 = ['Pascal', 'Jude', 'Paulette', 'Pauline'];
const studentNames2 = ['Anaise', 'Junia'];
const studentNames = ['Jan-Paul', 'Paulin', ...studentNames1];
console.log(studentNames);

// concatenate array/objects
const allStudents = [...studentNames1, ...studentNames2];
console.log(allStudents);

const employees = {
  firstname: 'pascal',
  lastname: 'laurent'
};

const department = {
  sections: [
    'math',
    'computer science',
    'geography'
  ]
};

let school = {
  ...employees,
  ...department
};

console.log(school);
