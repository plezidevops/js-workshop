/*
An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
*/

const s = [5, 7, 2];

function editInPlace() {
  return s.sort();
}
console.log(editInPlace());