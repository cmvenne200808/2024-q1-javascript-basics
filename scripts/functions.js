// @ts-check

// add can be called before it is defined because it is hoisted 
//to the global scope
add(1, 2)

let firstName = "John";

// add default parameter values
let sayHi = function (firstName = "Captain Yes Name", age = 100000) {
    let greeting = `Greetings fine fellow. My name is ${firstName} and I am ${age} years old.`;
        // "Greetings. My name is " + firstName + " and I am " + age + "years old.";
    console.log(greeting);
};

debugger;

// call with default params
sayHi();
// call with default age
sayHi("Jake");
sayHi("Calvin", 16);
sayHi(firstName, 21);

// console.log(firstName);

// this function is hoisted to the global scope
function add(a, b) {
    let answer = a + b;
    return answer;
}

let additionAnswer = add("9", 6)
add(5000, 9873498739873);

console.log(additionAnswer, add(5000, 9873498739873));

let runMyStuff = (x, y, f) => {
    let answer = f(x, y);
    return answer;
};

runMyStuff("Shteve", 32, sayHi);

let person = {
    isWearingBarneyShirt: false,
    isTotallyAwesome: false
};

function wearBarneyShirt(person) {
    person.isWearingBarneyShirt = true;
    person.isTotallyAwesome = true;
}

console.log(person);
wearBarneyShirt(person);
console.log(person);

