

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