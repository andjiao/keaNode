// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const r =Number(numberOne) + Number(numberTwo)
console.log('Exercise 1:', r)


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
// const r = Number(year) + number
let result = Number(anotherNumberOne) + Number(anotherNumberTwo);
console.log('Exercise 2:', result.toFixed(2))


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const sum = one+two+three/3

let s = sum.toFixed(5);
console.log("Exercise 3:", s)





// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
const letterC = letters[2]
console.log("Exercise 4:", letterC)




// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const uppperJ = fact.replace('j','J')
console.log('Exercise 5:', uppperJ)


// --------------------------------------


