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

console.log(checkPalindrome("RaCeCaR"));
