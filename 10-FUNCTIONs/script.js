

// How Passing Arguments Works: Value vs Reference


const flight = 'LH234' ;
const jonas = {
   name: 'Jonas Schmedtmann',
   passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
   flightNum = 'LH999';
   passenger.name = 'mr. ' + passenger.name;

   if (passenger.passport === 24739479284) {
      alert('Checked in');

   }else{
      alert('Wrong passport!');
   }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//Is the same as doing...
const flightNum = flight;
const passenger = jonas

const newPassport = function(person) {
   person.passport = Math.trunc(Math.random() * 1000000000 );
};



newPassport(jonas);
checkIn(flight, jonas);


// 1. Passing by Value

// When you pass a primitive data type to a function, it is passed by value. This means that the function receives a copy of the variable's value, not the actual variable itself. Any changes made to the argument inside the function do not affect the original value outside the function.

// function changeValue(x) {
//    x = 10;
// }

// let num = 5;
// changeValue(num);
// console.log(num); // Output: 5



// 2. Passing by Reference
// When you pass a reference data type to a function, it is passed by reference. This means that the function receives a reference (or a "pointer") to the actual object in memory, not a copy of the object itself. As a result, changes made to the object inside the function will affect the original object outside the function.

// Example with an Object:
// function changeProperty(obj) {
//    obj.name = "Changed Name";
// }

// let person = { name: "Original Name" };
// changeProperty(person);
// console.log(person.name); // Output: "Changed Name"


// Example with an Array:
// function addElement(arr) {
//    arr.push(4);
// }

// let numbers = [1, 2, 3];
// addElement(numbers);
// console.log(numbers); // Output: [1, 2, 3, 4]


//FIRST CLASS FUNCTIONS VS HIGHER ORDER FUNCTIONS


// first-class funtcions
// 👉JavaScript treats functions as first-class citizens
// 👉This means that functions are simply values
// 👉Functions are just another "type" of object

// 👉Store Functions in variable of properties:
//   const add = (a, b) => a + b;

//   const counter = {
//    value: 23,
//    inc: function() { this.value++; }
//   }

// 👉Pass Functions as arguements to OTHER functions:

// const greet = () => console.log('Hey Jonas');
// btnClose.addEventListener('click', greet);

// 👉 Return functions FROM functions

// 👉Call methods on functions:
// CountQueuingStrategy.inc.bind(someOtherObject);




// HIGHER-ORDER FUNCTIONS
// 👉A function that receives another function as an        argument, that returns a new  function. or both

// 👉This is only possible because of first-class functions



// 1. What is a Callback Function?
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. The concept is foundational in programming, particularly in asynchronous programming, event-driven environments, and in scenarios where functions need to be executed after specific actions.


//JONAS considers 132. Functions Accepting Callback Functions the Most important lecture among the whole course as he considers callbacks a vital part of the JavaScript language


// functions returning functions

const greet = function (greeting) {
   return function (name) {
      console.log(`${greeting} ${name}`);
   };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');


//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi') ('Jonas');


// const

// In JavaScript, functions are first-class objects, meaning that they can have properties and methods. The call(), apply(), and bind() methods are powerful tools for controlling how functions are invoked, specifically by allowing you to explicitly set the value of this within the function.
// The call() method invokes a function with a specific this value and allows you to pass arguments individually.
function greet(greeting, punctuation) {
   console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };

greet.call(person, 'Hello', '!');  // Output: Hello, John!


// 2. apply()
// The apply() method is similar to call(), but it takes the arguments as an array rather than passing them individually.
function greet(greeting, punctuation) {
   console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'Jane' };

greet.apply(person1, ['Hi', '?']);  // Output: Hi, Jane?


// 3. bind()
// The bind() method returns a new function that, when called, has its this value permanently set to the provided thisArg. It can also take predefined arguments (partial application).
function greet(greeting, punctuation) {
   console.log(greeting + ', ' + this.name + punctuation);
}

const person3 = { name: 'Tom' };

const greetTom = greet.bind(person3);
greetTom('Hello', '!');  // Output: Hello, Tom!



// Immediately Invoked Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed immediately after its creation. The function is invoked as soon as it is defined, and it’s typically used to create a local scope, avoiding polluting the global namespace.

(function() {
   console.log("This function runs immediately!");
})();
