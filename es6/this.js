// "use strict"

function printThis() {
  console.log(this);
}
printThis(); //Global for node Window for the browser

function printThis2() {
  console.log(this);
}
let result = printThis.bind({ name: 'Pascal' });
result();

printThis.call(34);
printThis.apply(45);