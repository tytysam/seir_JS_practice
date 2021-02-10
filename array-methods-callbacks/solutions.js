const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

//******
//EVERY
//Determine if every number is greater than or equal to 0

const isEveryNumGreaterThanZero = nums.every((num) => {
  return num >= 0;
});
console.log(isEveryNumGreaterThan0);

//determine if every word shorter than 8 characters

const isEveryWordShorterThanEight = panagram.every((word) => {
  return word.length < 8;
});
console.log(isEveryWordShorterThanEight);

//******
//Filter
//filter the array for numbers less than 4

const filteredNums = nums.filter((num) => {
  return num < 4;
});
console.log(filteredNums);

//filter words that have an even length

const filteredWords = panagram.filter((word) => {
  return word.length % 2 === 0;
});
console.log(filteredWords);

//******
//Find
//Find the first value divisible by 5

const foundFirstDiviByFive = nums.find((num) => {
  return num % 5 === 0;
});

console.log(foundFirstDiviByFive);

//find the first word that is longer than 5 characters

const foundFirstWordGreaterThan5 = panagram.find((word) => {
  return word.length > 5;
});
console.log(foundFirstWordGreaterThan5);

//******
//Find Index
//find the index of the first number that is divisible by 3

const indexOfFirstNumDiviByThree = nums.findIndex((num) => {
  return num % 3 === 0;
});
console.log(indexOfFirstNumDiviByThree);

//find the index of the first word that is less than 2 characters long

const indexOfFirstWordLessThanTwoLength = panagram.findIndex((word) => {
  return word.length < 2;
});
//the above returns an index of -1, and I'm not entirely sure why...
console.log(indexOfFirstWordLessThanTwoLength);

//******
//For Each
//console.log each value of the nums array multiplied by 3

nums.forEach((num) => {
  console.log(num * 3);
});

//console.log each word with an exclamation point at the end of it

panagram.forEach((word) => {
  console.log(word + "!");
});

//THOUGHT QUESTIONS
//What happened to the original array?

//Can you store the values from a forEach method in a new array?

//******
//Map
//make a new array of each number multiplied by 100

const numTimes100 = nums.map((num) => {
  return num * 100;
});

console.log(numTimes100);

//make a new array of all the words in all uppercase

const upperCaseWords = panagram.map((word) => {
  return word.toUpperCase();
});

console.log(upperCaseWords);

//THOUGHT QUESTIONS
//What happened to the original array?

//Can you store the values from a map method in a new array?

//******
//Some
//Find out if some numbers are divisible by 7

const divisibleBySeven = nums.some((num) => {
  return num / 7;
});
console.log(divisibleBySeven);

//Find out if some words have the letter a in them

const isThereAnA = panagram.some((word) => {
  return word.includes("a");
});

console.log(isThereAnA);
