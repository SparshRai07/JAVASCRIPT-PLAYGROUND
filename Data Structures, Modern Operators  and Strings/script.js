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
[main, secondary] = [seconday, main];
console.log(main, secondary);
    //Vegetarian Italian

  

//NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
const [i, [j, k]] = nested;
console.log(i, j, k);
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


