'use strict'





// Data needed for first part of the section
const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };



// Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


// const [main, , secondary] = resturant.categories;
// console.log(main, secondary);  //Italian Vegetarian




//Switiching Variables
// [main, secondary] = [seconday, main];
// console.log(main, secondary);
    //Vegetarian Italian

  

//NESTED DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// const [i, [j, k]] = nested;
// console.log(i, j, k);
    //2 5 6

 






// EG
const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue

// You can skip elements in an array by using commas.
const numbers = [1, 2, 3, 4, 5];

const [first, , third, , fifth] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
console.log(fifth); // Output: 5


//Swapping the values of two variables 
let aa = 1;
let bb = 2;

[aa, bb] = [bb, aa];

console.log(aa); // Output: 2
console.log(bb); // Output: 1



// SHORT CIRCUITING METHOD

const rest1 = {
   name : 'Capri',
   numGuests: 20,

};

const rest2 = {
name: 'La Piazza',
owner: 'Giovanni Rossi',


};

// rest1.numGuests = rest1.numGuests  || 10;
// rest2.numGuests = rest1.numGuests  || 10;

// or assignment operator
rest1.numGuests ||= 10;
rest1.numGuests ||= 10; 

console.log(rest1);
console.log(rest2);




//FOR LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu)
   console.log(item);

for (const item of menu.entries()) {

}

// let numbers = [10, 20, 30, 40, 50];

// for (let number of numbers) {
//   console.log(number);
// }

// Output:
// 10
// 20
// 30
// 40
// 50



// ENHANCED OBJECT LITERAl
// Enhanced Object Literals include:

// Property Shorthand: Allows you to define properties using just the variable name when the property name matches the variable name.
// Method Shorthand: Enables defining methods without the function keyword.
// Computed Property Names: Lets you use expressions as property names within an object.
  

// looping OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

  //  openingHours: {
  //     thu: {
  //       open: 12,
  //       close: 22,
  //     },
  //     fri: {
  //       open: 11,
  //       close: 23,
  //     },
  //     sat: {
  //       open: 0, // Open 24 hours
  //       close: 24,
  //     },
  //   }
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const entries = Object.entries(openingHours);
console.log(entries);

// Object.keys(object)

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const keys = Object.keys(person);

// keys.forEach(key => {
//     console.log(key); // Outputs: "name", "age", "city"
// });




// Object.values(object)
// 
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const values = Object.values(person);

// values.forEach(value => {
//   console.log(value); // Outputs: "John", 30, "New York"
// });



// Object.entries(object)
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const entries = Object.entries(person);

// entries.forEach(entry => {
//   console.log(entry); // Outputs: ["name", "John"], ["age", 30], ["city", "New York"]
// });




// for (key in object) {
  // code block to be executed
// }
// USING FOR LOOP AND ACCESSING KEYS BY ITERATING
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// for (let key in person) {
//   console.log(key); // Outputs: "name", "age", "city"
// }



// Accessing Values with for...in
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
//   // Outputs:
//   // "name: John"
//   // "age: 30"
//   // "city: New York"
// }



// SETS
// A Set is a collection of values where each value must be unique. In a Set, duplicate values are automatically removed, and values are not indexed, meaning that the order of insertion is preserved, but you cannot access elements by their index as you would in an array.

// const set = new Set([iterable]);


// const mySet = new Set([1, 2, 3, 4, 4, 5]);
// console.log(mySet); // Outputs: Set(5) { 1, 2, 3, 4, 5 }

// Methods of a Set
// add(value)
// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(1); // Duplicate value

// console.log(mySet); // Outputs: Set(3) { 1, 2, 3 }


// 3.2. delete(value)
// const mySet = new Set([1, 2, 3]);
// mySet.delete(2);

// console.log(mySet); // Outputs: Set(2) { 1, 3 }


// 3.3. has(value)
// const mySet = new Set([1, 2, 3]);

// console.log(mySet.has(2)); // Outputs: true
// console.log(mySet.has(4)); // Outputs: false


// 3.4. clear()
// const mySet = new Set([1, 2, 3]);
// mySet.clear();

// console.log(mySet); // Outputs: Set(0) {}



// MAPS (FUNDAMENTALS)

// A Map is an ordered collection of key-value pairs where the keys can be of any type (including objects, functions, and primitive types). Maps remember the original insertion order of the keys

// const map = new Map([iterable]);
// Maps are a flexible, ordered collection of key-value pairs where keys can be of any type.




// DATASTRUCTURES OVERVIEW

// sources of data
// 1.FROM THE PROGRAM ITSELF: Data written directly in source code (e.g status messages)
//2.FROM THE UI:Data input from the user or dta written in DOM (e.g tasks in todo app)
//3. FROM EXTERNAL SOURCES: Data fetched for example from web API (e.g. reciept objects)

//                     🔽                   
//              Collection of Data 
//                     🔽
//                DATA STRUCTURE
//


// ARRAYS VS SETS AND OBJECTS VS MAPS
// ARRAYS
// Use when you need ordered list of values (might contain duplicates)
//Use when you need to manipulate data

// SETS
// Use when you need to work with unique values
// Use when high-performance is really important
//Use to remvoe duplicates from arrays


// OBJECTS VS MAPS
// OBJ
//More "traditional"key/value store("abused" objects)
// Easier to write and access values with . and []

// MAPS
// Better Performance 
// keys can have any data type
// Easy to iterate 
// Easy to Compute size



