// This refers to the employee object
const employee = {
  salary: 260000,
  getSalary: function () {
    return this.salary;
  }
};

console.log(employee.getSalary());

let otherEmployee = employee.getSalary;
console.log(otherEmployee);