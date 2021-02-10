//What is the difference between a parameter and an argument?
// --> a parameter is essentially a placeholder established when you declare a
// --> function/expression, whereas an argument is the actual object/value
// --> passed into the function.

// Within a function, what is the difference between return and console.log?
// --> while console.log will display the parameter that you're passing to the
// --> log method in the console window. return will stop the function from executing
// --> and return the specified value

//Palindrome
//WHAT STEPS DO WE NEED???
// 1.) Reverse the word.
// 2.) Check if the word is the same as the reverse
// 3.) Return true or false

//TEST --> 'racecar'

const checkPalindrome = (string) => {
  //we could use a regular expression to remove any unwanted spaces/characters, but that might be beyond me tonight.
  let lowerCaseString = string.toLowerCase();
  //RESOURCE: https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
  let reverseString = lowerCaseString.split("").reverse().join("");
  return reverseString === lowerCaseString;
};

// console.log(checkPalindrome("RaCeCaR"));

// //Sum Array
const numbers = [1, 2, 3, 4, 5, 6];

let newSum = 0;
const sumArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    newSum += array[i];
  }
  return newSum;
};

// console.log(sumArray(numbers));

//Prime Numbers
const checkPrime = (num) => {
  //You need to start i @ 2 because it is the first prime number.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const printPrimes = (num) => {
  //Again, we need to start our array with a value of 2 since that is the first
  //prime number
  let arr = [2];
  for (let i = 3; i < num; i += 2) {
    if (checkPrime(i)) {
      arr.push(i);
    }
  }
  console.log(arr);
};

// console.log(checkPrime(7));

// printPrimes(97);

//***************
//Rock Paper Scissors Lizard Spock

//rPSLS --> rock, paper, scissors, lizard, spock
//*********************
//Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors

const randomMove = () => {
  let randomNum = Math.random() * 5;
  if (randomNum <= 1) {
    return "rock";
  } else if (randomNum > 1 && randomNum <= 2) {
    return "paper";
  } else if (randomNum > 2 && randomNum <= 3) {
    return "scissors";
  } else if (randomNum > 3 && randomNum <= 4) {
    return "lizard";
  } else {
    return "spock";
  }
};

let computersMove = randomMove();
let usersMove = randomMove();
let computerWin = console.log(`The computer's ${computersMove} wins!`);
let userWin = console.log(`The user's ${usersMove} wins!`);

const rPSLS = (computersMove, usersMove) => {
  if (usersMove === computersMove) {
    console.log("It's a tie!");
    //If User picks rock...
  } else if (usersMove === "rock") {
    if (computersMove === "scissors") {
      return userWin;
    } else if (computersMove === "paper") {
      return computerWin;
    } else if (computersMove === "lizard") {
      return userWin;
    } else if (computersMove === "spock") {
      return computerWin;
    }
    //If User picks paper...
  } else if (usersMove === "paper") {
    if (computersMove === "scissors") {
      return computerWin;
    } else if (computersMove === "rock") {
      return userWin;
    } else if (computersMove === "lizard") {
      return computerWin;
    } else if (computersMove === "spock") {
      return userWin;
    }
    //If User picks scissors...
  } else if (usersMove === "scissors") {
    if (computersMove === "paper") {
      return userWin;
    } else if (computersMove === "rock") {
      return computerWin;
    } else if (computersMove === "lizard") {
      return userWin;
    } else if (computersMove === "spock") {
      return computerWin;
    }
    //If User picks lizard...
  } else if (usersMove === "lizard") {
    if (computersMove === "scissors") {
      return computerWin;
    } else if (computersMove === "rock") {
      return computerWin;
    } else if (computersMove === "paper") {
      return userWin;
    } else if (computersMove === "spock") {
      return userWin;
    }
    //If User picks spock...
  } else if (usersMove === "spock") {
    if (computersMove === "scissors") {
      return userWin;
    } else if (computersMove === "rock") {
      return userWin;
    } else if (computersMove === "lizard") {
      return computerWin;
    } else if (computersMove === "paper") {
      return computerWin;
    }
  }
};

console.log(rPSLS(computersMove, usersMove));
