// Moving javascript declaration to the top
number = 1;
console.log(number);
var number;

/*
1. Observe: number is assigned the value 1 before it is declared
2. The result is 1 after the program runs
3. why it works?
4. During compilation phase all declarations are at the top
5. Since it number is declared first, that is why its value is 1
*/

num1 = 25;
console.log('num1: ' + num1);
console.log('num2: ' + num2);
// console.log('num3: ' + num3);

var num2 = 50;

// Javascript also move function to the top
console.log(add(1, 2));

function add(num1, num2) {
  return num1 + num2;
}

console.log(add2(2, 3)); // add2 is nor a function error

var add2 = function (num1, num2) { // A variable add2 is declared and assigned an annonymous function
  return num1 + num2;
};

