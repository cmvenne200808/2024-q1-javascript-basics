// @ts-check
// this variable is a number
let intelligenceQuotient = 100;

// first name is a string
let firstName = "Calvin";
let lastName = "Venne";

// I can reassign a variable's value
firstName = "John";
lastName = "John";

// these are constants and cannot be reassigned
const MIN_IQ = 50;
const MAX_IQ = 300;

// MIN_IQ = 100;

// Boolean values are true or false
let isWillTheCoolest = true;

// curently undefined
let dontKnow;

// null is a value that has no value
let intoTheVoid = null;


console.log(firstName, lastName, "has an IQ of", intelligenceQuotient);

// object's are defined by curly brachets
// this is an object definition
let myPet = {
    type: "Tenrec",
    name: "Jerry",
    ageInHumanYears: 4,
    color: "yellow & black"
};

myPet.color = "navy blue";
console.log("myPet looks like this", myPet);

// arrays use square brachets
// arrays are fun
let favCandies = [
    "War Heads",
    "Black Licorice",
    "Skittles JUST Skittles",
    "Snickers",
    true,
    9000000,
    myPet,
];

console.log("my fav candies are:", favCandies);
// arrays start counting from zero
console.log("my fav candies at index 2 is:", favCandies[2]);
