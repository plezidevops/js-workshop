/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * DONE: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses
let guesses = [];

// Variable for store the correct random number
let correctNumber = getRandomNumber();

// Variable for number guess
const numberGuessText = 'Try another number';

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

/**
* Functionality for playing the whole game
*/
function playGame() {
  // *CODE GOES BELOW HERE *
  const numberGuess = document.getElementById('number-guess').value;
  document.getElementById('number-guess').value = '';
  console.log(correctNumber);
  saveGuessHistory(numberGuess);
  displayResult(numberGuess);
  displayHistory();
}

/**
* Show the result for if the guess it too high, too low, or correct
* HINT: Use if, else if, else statement
*/
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
    changeInputPlaceholder();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
    changeInputPlaceholder();
  } else {
    showYouWon();
    changeInputPlaceholder('You win!!!! ... Restart the game');
  }
}


/**
* Initialize a new game by resetting all values and content on the page
* HINT: reset the correctNumber, guesses, and HTML content
*/
function initGame() {
  // *CODE GOES BELOW HERE *
  guesses = [];
  correctNumber = 0;

  document.getElementById("result").innerHTML = "";
  document.getElementById('number-guess').value = '';

  element = document.querySelector(".list-group");
  if (element) { element.remove("list-group"); }

  changeInputPlaceholder("What's your guess?");
}

/**
* Reset the HTML content for guess history
*/
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
* Return a random number between 1 and 100
* HINT: Use Math.random
*/
function getRandomNumber() {
  // *CODE GOES BELOW HERE *
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  return randomNumber;
}

/**
* Save guess history
* HINT: Search Google "append to array in javascript"
* HINT: Use the guesses variable
*/
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
}

/**
* Display guess history to user
* HTML TO USE:
* <ul class='list-group'>
*  <li class='list-group-item'>You guessed {number}</li
* </ul>
* HINT: use while loop and string concatentation to create a list of guesses
*/
function displayHistory() {
  console.log('display history');
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  guesses.forEach(guess => {
    list += `<li class='list-group-item'>You guessed ${guess}</li>`;
  });

  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}



/**
* Retrieve the dialog based on if the guess is wrong or correct
*/
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  // *CODE GOES BELOW HERE *
  const dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  const dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  const dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function changeInputPlaceholder(text = numberGuessText) {
  const numberGuessInput = document.getElementById('number-guess');
  numberGuessInput.placeholder = text;
}
