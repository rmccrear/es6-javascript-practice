
// second order functions in JavaScript 

// a first order function is a function that takes a value and returns a value (That is a normal function)

function add(a, b) {
    return a + b;
}

const sum = (a, b) => a + b;

// lets look at some super simple first order function

const one = () => 1;
const two = () => 2;
function three() {
    return 3;
}
function four() {
    return 4;
}

// lets call the functions!



// Make a super simple function that returns your name.




// Higher Order Functions. 

// We can make a function that returns a function. Don't worry about WHY for now, just know that we can do it.

const HiOne = () => () => 1;
const HiTwo = () => () => 2;
function HiThree() {
    return function () {
        return 3;
    }
}
function HiFour() {
    return function () {
        return 4;
    }
}

// lets call the functions!

const oneFunc = HiOne();
let oneValue = oneFunc();
console.log(oneValue);
oneValue = HiOne()();
console.log(oneValue);

// Try to call the other higher order functions and log the value to the console.


// Now make a higher order function that returns a function that returns your name. Call the functions and log the value to the console.

// Higher order functions are very powerful and are used in many libraries and frameworks. They are a key concept in functional programming.

// Example: express.json() middleware is a higher order function that returns a middleware function.

// app.use(express.json()) 

// We can use higher order functions to create middleware functions that can be used in our express applications.


// Before we go, lets look at a higher order function that takes an argument.

function adder(a) {
    return (b) => a + b;
}

const addFive = adder(5);
console.log(addFive(1)); // 6 
console.log(addFive(3)); // 8

const addTen = adder(10);
console.log(addTen(3)); // 13
console.log(addTen(5)); // 15

// You can call them in series too.
// It looks strange, but works.
// Can you see it?
console.log(adder(5)(1)); // 6
console.log(adder(10)(3)); // 13

// Try it out with your own numbers.





// Lets make one that personalizes a happy birthday message.

function birthdayMessage(name) {
    return (gift) => `Happy Birthday ${name}! Here is a ${gift} for you!`;
}

const birthdayForAlice = birthdayMessage('Alice');
console.log(birthdayForAlice('book')); // Happy Birthday Alice! Here is a book for you!
console.log(birthdayForAlice('cake')); // Happy Birthday Alice! Here is a cake for you!

// Try it out with someone's name and a few different gifts.

