// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

//if you want to get an element of a given index, we use the square-bracket notation
console.log('Exercise 1:', letters[1])


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it without touching the line above.  
friends.push(person1 = {
    name:'andrea',
    age:23
})
friends.push(person2 = {
    name:'Niels',
    age:90
})

friends.push(person3 = {
    name:'Alice',
    age:1
})
console.log('EXercise 2:', friends)



// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

for (let index in significantMathNumbers){
    //to displey the values og the propperties we use the dot-notation
    //but when we do not know the values we use the square brackets, to displey the values
    console.log('Exercise 3:',`the index ${index} has a value of ${significantMathNumbers[index]}`);
}

let index = significantMathNumbers.indexOf(1729)
console.log(`ther index of 1729 is ${index}`)



// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2,0, ' hamburger, soda and pizza');
console.log('EXercise 4:', diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
diet.splice(-1);
console.log('EXercise 5:', diet)


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend. 

const dinnerTray = JSON.parse(JSON.stringify(diet));
console.log('EXercise 6:', dinnerTray)


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
lettersExpanded.splice()




// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(let element of numbers){
    if (element>6 || element<0){
        console.log(element);
    }
    else{
        discardedNumbers.push(element);
    }
}




// --------------------------------------

