// Rest parameter and the Rest pattern


// Rest Parameter
// The Rest parameter allows you to represent an indefinite number of arguments as an array. It is useful in situations where you want to handle a varying numbest Parameterr of arguments in a function.

// Syntax
function functionName(param1, param2, ...rest) {
   // Function body
}



// Example 1: Summing an Indefinite Number of Arguments
function sum(...numbers) {
   return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Example 2: Handling Additional Arguments
function introduce(firstName, lastName, ...otherDetails) {
   console.log(`Hello, my name is ${firstName} ${lastName}.`);
   console.log('Other details:', otherDetails);
}

introduce('John', 'Doe', 'Age: 30', 'Likes: Coding', 'Location: New York');


//OUTPUT
// Hello, my name is John Doe.
// Other details: [ 'Age: 30', 'Likes: Coding', 'Location: New York' ]


// Rest Pattern
// The Rest pattern is used in destructuring assignments. It allows you to collect the remaining elements of an array or object into a new array or object.

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// Object Destructuring

const person = {
   name: 'Alice',
   age: 25,
   country: 'USA',
   profession: 'Developer'
};

const { name, age, ...otherDetails } = person;
console.log(name); // Alice
console.log(age); // 25
console.log(otherDetails); // { country: 'USA', profession: 'Developer' }



// The nullish coalescing operator (??) is not the exact opposite of the short-circuiting methods (&& and ||), but it serves a different purpose and can be considered a more specific alternative in certain contexts. Here’s a detailed comparison:

// Nullish Coalescing Operator (??)
// The nullish coalescing operator (??) is used to provide a default value only when the left-hand operand is null or undefined. It is useful when you want to handle cases where a value might be explicitly null or undefined, but still want to allow falsy values like 0, false, or an empty string.

// Syntax: expression1 ?? expression2

let user = null;
let defaultUser = "Guest";
console.log(user ?? defaultUser); // Output: "Guest" (because user is null)

let count = 0;
let defaultCount = 10;
console.log(count ?? defaultCount); // Output: 0 (because count is not null or undefined)


// Logical OR (||)
// The logical OR operator (||) returns the right-hand operand if the left-hand operand is falsy (i.e., false, 0, null, undefined, NaN, or an empty string).

// Syntax: expression1 || expression2

// Examples:
// let user = null;
// let defaultUser = "Guest";
// console.log(user || defaultUser); // Output: "Guest" (because user is falsy)

// let count = 0;
// let defaultCount = 10;
// console.log(count || defaultCount); // Output: 10 (because count is falsy)
