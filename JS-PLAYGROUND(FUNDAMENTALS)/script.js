// // // boolean 
// // let javascriptISfun = true;
// // console.log(javascriptISfun);

// // console.log(typeof true);
// // console.log(typeof javascriptISfun);
// // console.log(typeof 23);
// // console.log(typeof 'jonas'); //we need double quotes to define something as string


// // // javascriptISfun = 'YES!';
// // // console.log(javascriptISfun);
// // console.log(javascriptISfun);

// // javascriptISfun = "no!";
// // console.log(javascriptISfun);

// // let year;
// // console.log(year) ;
// // console.log(typeof year);

// // year = 1991;
// // console.log(typeof year);

// // console.log(typeof null);



// //reassigning value to a variable// MUTATE A VARIABLE
//  let age = 30;
//  age = 31;

//  console.log(age);


//  //const variable cannot be changes in the future use
 
//  const birthYear = 1991;
// //  birthYear= 1993;
// console.log(birthYear);
// //USE CONST MAINLY 

// var birthDate = 1666;
// birthDate = 9999;
// console.log(birthDate);


// //VAR SHOULD BE COMPLETELY AVOIDED 


// var job = 'programmer';
// job = 'teacher'

// console.log(job);  

// lastName = 'RAI';
// console.log(lastName);

// // OPERATORS
// const now = 200;
// const ageJonas = 200 - 100;
// const ageSarah = 100 - 50;
// console.log(ageJonas, ageSarah);

// const currentAge = now - ageSarah;
// console.log(currentAge);
// console.log(ageJonas * 2, ageJonas / 2);

// console.log (ageJonas * 2, ageJonas /10 )

// //SPACING BETWEEN
// const firstName = 'Jonas';
// const LastName= 'Rai';
// console.log(firstName + ' '+ LastName); 

//  let x = 10 + 5; //15
//  x += 10;  //x = x + 10 = 25
//  x += 4;//X = X * 4 = 100
//  x++; //x = x + 1
//  x--;   
//  console.log(x);
 


//  let FirstName1 ='SPARSH-RAI';
 
//   console.log(FirstName1);

// let y = 100;
// y ++;
// y--;
// console.log(y);


// // Comparison Operators 
// console.log( ageJonas > ageSarah);
// // console.log (ageSarah >=18 );



// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
 
// console.log (now - 1991 > now - 2018);
// console.log (now - 1991 * now - 2018  );

// console.log(25 - 10 -5); // x = y = 10. x=10




// const averageAge = (ageJonas + ageSarah) / 2 
// console.log( ageJonas, ageSarah, averageAge);




// const all = 100;
// const today = 20;
// const tommorow = 30;
// console.log (all, today, tommorow);
// console.log( all, today - tommorow, all-today- tommorow);

// const container = 100;
// const contain = 50;
// const contained = 50;
// console.log(container, contain, contained);

//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.


// Store Mark's and John's mass and height
// const massMark = 78; // kg
// const heightMark = 1.75; // meters
// const massJohn = 92; // kg
// const heightJohn = 1.85; // meters

// // Calculate BMIs
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// Log the results
// console.log("Mark's BMI:", BMIMark.toFixed(2)); // Round to two decimal places
// console.log("John's BMI:", BMIJohn.toFixed(2));

// const massMark = 80; // Mark's mass in kg
// const heightMark = 1.75; // Mark's height in meters
// const massJohn = 60; // John's mass in kg
// const heightJohn = 1.85; // John's height in meters

// // Calculate BMIs (Body Mass Index)
// const MarkBMI = massMark / (heightMark * heightMark);
// const johnBMI = massJohn / (heightJohn * heightJohn);

// console.log(MarkBMI); // Output: 26.12235597101449
// console.log(johnBMI);  // Output: 17.79818181818182



// const MarkMass = 78;
// const MarkHeight = 1.69;
// const johnMass= 92;
// const johnHeight = 1.95;

// const BMImark = MarkMass / heightMark ** 2;
// const BMIjohn = johnMass / (johnHeight * heightJohn);
// console.log(BMImark, BMIjohn);

//SIMPLE RESTURANT BILL CALCULATOR
// const mealPrice = 100; //Rs
// const tax = 0.10;
// const tipPercentage = 0.05;

// const taxAmount = mealPrice * tax;
// const tipAmount = mealPrice * tipPercentage;
// const totalAmount = mealPrice + taxAmount + tipAmount;

//meal price with tax amount added
// console.log(taxAmount);

// //meal price with tipAmount 
// console.log(tipAmount);

// //meal with totalamount 
// console.log(totalAmount);


// //STRINGS AND TEMPLATE LITERALS

// const firstName = 'Sparsh';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// // const jonas = "i'm" + firstName + ',a' + (year - birthYear) + ' years old' + jon + '!';
// // console.log(jonas);

// //TEMPLATE LITERALS
// const jonasNew = `i'm  ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log (jonasNew);


// //Make a habit of checking the console for possible mistakes and possible errors
// console.log(`just a regular string ...`);

// console.log("checking if console.log prints other things");

// //strings with multiple linnes 
// console.log (`String with \n\ multiple \n\ lines`);

// //Can be achieved similar result just using backtick
// console.log(`String
// multiple
// lines`);



//CONSOLE RESULT
//String
//multiple
//lines

//TAKING DECISIONS IF/ELSE STATEMENTS

// const age = 15;
// const isOldEnough = age>= 18;

// if(isOldEnough) {
//    console.log(`Sarah can start driving license`);

// }
// else {
//    console.log(`not old enough`);
// }

// if (age >= 18 ){}
//    console.log(`SARA can start driving license`);
//   ) else {
//       console.log(`Sara is too young wait another {yearsLseft} years :)`);
//    }

// const age = 25;

// if(age >= 18) {
//    console.log('Sarah can start driving licsense');
// }
// else{
//    const yearsLeft = 18 - age;
//    console.log(`Sarah is too young. Wait another ${yearsLeft} years;)`)
// }


// const massMark = 70;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//    console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})!`);
// } else {
//    console.log(`John's BMI (${BMIJohn}) higher than Mark's (${BMIMark})!`);
// }


//TYPE CONVERSION 

// const inputYear = '1991';
// console.log (inputYear); 
// console.log(Number(inputYear) + 10); //Output: 2001//
// console.log(Number(inputYear) + inputYear); //Output: 19911991// 
// console.log(Number(inputYear) + Number(inputYear)); //Output: 3982//

// console.log(Number);

// console.log( String(23), 23);

// //TYPE COERCION

// console.log(`I am ${23} years old`); // output: I am 23 years old

// console.log('23' - '10' -3 ); // output: 10
// console.log('23' + '10' +3 ); // output: 23103
// console.log('23' * '2') //output: 46

// let n = '1' + 1; //11
// n = n-1; //10
// console.log(n);
//output: 10;

//2+3+4+'5'= "95"

//'10'-'4'-'3'-2+'5' = "15"
//'10' = "10"
//'10' - '4' = 6 //subtraction
//6 - '3' = 3 //subtraction
//3 - 2 = 1 //subtraction
//1 + '5' = "15" //addition and concatenation

//TRUTHY AND FALSY VALUES

//FALSY VALUES 5: 0, '', UNDEFINED, NULL, NaN

// v 

 //Equality Operators


//  const age = 18;
//  if (age === 18  ) console.log('you just became adult :D');


 
//  let bage  = 25; // Assigns the value 25 to the variable 'bage'

  //Purpose: It creates a binding between the variable name and the value on the right side. Any subsequent changes to the value on the right side won't affect the original value assigned to the variable.

//   console.log(1 === '1');   // false (different types)
//   console.log(0 === false); // false (different types)
//   console.log(null === undefined); // false (different types)
//   console.log([] === []);   // false (different memory locations)
  

// if (age == 18) console.log('You just became an adult :D (loose)');

// prompt("What is your favorite number?");

// console.log(favorite);
// console.log(typeof favorite);

// if(favorite == 23 ) { // '23' == 23
//    console.log('Cool! 23 is an amazinf number!')
// }

// console.log(5 == '5');  // true, because '5' is converted to a number
// console.log(0 == false);  // true, because 0 and false are both falsy
// console.log('1' == true);  // true, because '1' is converted to a number (1) and true is considered 1 in numeric context
// console.log(null == undefined);  // true, as null and undefined are considered equal
// console.log('hello' == 'hello');  // true, because both strings are identical


// const age = 18;
// if(age === 18) 
//   console.log('you just became an adult :D');

// if (age == 18) console.log('you just became an adult :D (loose)'); //avoid this as much as possible for writing clean code

// const favorite = prompt("what's your favorite number?");
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite == 23) { //'23' == 23 -> FALSE
//    console.log('Cool! 23 is an amazing number!')
// } else if (favorite == 7) {
//    console.log('7 is also a cool number')
// } else  if (favorite === 9) {
//    console.log
//       ('9 is also a cool number')
//    } else {
//    console .log ('Number is not 23 or 7 OR 9')
// }

//always use the strict version of == (== and !==)  


//DISCIPLINE DICTATES YOUR DESTINY


//LOGICAL OPERATORS

//Booleans Value  

//A Boolean is a data type that can hold one of two possible values: true or false. It is used to represent the truth value of an expression, which is essential in control flow and decision-making in programming.


// AND (&&): Returns true if both operands are true; otherwise, returns false.

// Syntax: expr1 && expr2

// Example:

// if (isRaining && isCold) {
//    console.log("Better wear a coat!");
//  }



// OR (||): Returns true if at least one of the operands is true; if both are false, returns false.

// Syntax: expr1 || expr2

// Example:
// if (isRaining || isSunny) {
//    console.log("Take an umbrella or sunscreen!");
//  }

// NOT (!): Inverts the truth value of its operand. If the operand is true, returns false, and vice versa.

// Syntax: !expr

// Example:

// if (!isRaining) {
//    console.log("No need for an umbrella.");
//  }

// const isRaining = false; // define isRaining before using it
// const isSunny = true; // define isSunny before using it

// if (isRaining && !isSunny) {
//    console.log("It's raining without sunshine.");
//  } else if (!isRaining && isSunny) {
//    console.log("It's sunny and not raining.");
//  } else {
//    console.log("The weather is unpredictable.");
//  }

// const hadDriversLicense = true; // A
// const hasGoodVision = false; //B

// console.log (hadDriversLicense && hasGoodVision );
// console.log (hadDriversLicense || hasGoodVision );
// console.log (!hadDriversLicense);

// const shouldDrive = hadDriversLicense && hasGoodVision; // syntax error fixed

// if (hadDriversLicense && hasGoodVision) {
//    console.log('Sarah is able to drive!');
// } else {
//    console.log('Someone else should drive...');
// }

//A Boolean is a data type that can hold one of two possible values: true or false. It is used to represent the truth value of an expression, which is essential in control flow and decision-making in programming.

//!isTired-->is not tired

// const isTired = false; 
// console.log(hadDriversLicense && hasGoodVision && isTired); 

// if (hadDriversLicense && hasGoodVision && !isTired) {
//    console.log('Sarah is able to drive!');
// } else {
//    console.log('Someone else should drive...');
// }


// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//    console.log('Dolphins win the trophy');
// } 
//   else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//    console.log('koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas >= 100) {
//    console.log('Both win the trophy!');
// } else {
//    console.log('No one wins the trophy');
// }

// //25 (twenty five)--

// // Switch Statment
// // Function that uses a switch statement to check a grade value
// function evaluateGrade(grade) {
//    // Using a switch statement to handle different cases based on 'grade' value
//    switch (grade) {
//        case 'A':
//            console.log('Excellent!'); // Log "Excellent!" if grade is 'A'
//            break; // Breaks out of the switch block to avoid executing more cases

//        case 'B':
//            console.log('Good job!'); // Log "Good job!" if grade is 'B'
//            break; // Break to prevent further case execution

//        case 'C':
//            console.log('Well done!'); // Log "Well done!" if grade is 'C'
//            break; // Break to exit the switch statement

//        case 'D':
//            console.log('You passed'); // Log "You passed" if grade is 'D'
//            break; // Break to halt further execution

//        case 'F':
//            console.log('Better luck next time'); // Log "Better luck next time" if grade is 'F'
//            break; // Break to stop the switch

//        default:
//            console.log('Invalid grade'); // Log "Invalid grade" if none of the cases match
//    }
// }

// // Call the function with different grades
// evaluateGrade('A'); // Logs "Excellent!"
// evaluateGrade('B'); // Logs "Good job!"
// evaluateGrade('F'); // Logs "Better luck next time"
// evaluateGrade('G'); // Logs "Invalid grade"


// // Function that uses if/else statements to check a grade value
// function evaluateGrade(grade) {
//    // Check if grade is 'A'
//    if (grade === 'A') {
//        console.log('Excellent!'); // Log "Excellent!" if grade is 'A'
//    } else if (grade === 'B') { // Check if grade is 'B'
//        console.log('Good job!'); // Log "Good job!" if grade is 'B'
//    } else if (grade === 'C') { // Check if grade is 'C'
//        console.log('Well done!'); // Log "Well done!" if grade is 'C'
//    } else if (grade === 'D') { // Check if grade is 'D'
//        console.log('You passed'); // Log "You passed" if grade is 'D'
//    } else if (grade === 'F') { // Check if grade is 'F'
//        console.log('Better luck next time'); // Log "Better luck next time" if grade is 'F'
//    } else { // Handle any other value
//        console.log('Invalid grade'); // Log "Invalid grade" if none of the conditions above are met
//    }
// }

// // Call the function with different grades
// evaluateGrade('A'); // Logs "Excellent!"
// evaluateGrade('B'); // Logs "Good job!"
// evaluateGrade('F'); // Logs "Better luck next time"
// evaluateGrade('G'); // Logs

// //Statements and Expressions
//  if (23 > 10) {
//    const str = '23 is bigger';
//  }

 
 //the conditional (ternary Operator)

//  const age = 23;
//  (() => {
//  	if (age >= 18) {
//  		console.log('I like to drink wine');
//  	} else {
//  		console.log('I like to drink water ');
//  	}
//  })();

//28

// const age = 23;
// age>=18? console.log('drink wine')
// : console.log('drink water')


// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if(age >= 18) {
// 	drink2 = 'wine..wine';
// } else {
 
// 	drink2 = 'water..water';
// }

// console.log(drink2);

//TERNARY OPERATOR

// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);


// let Bage = 20;
// let canVote = (Bage >= 18) ? "Yes" : "No";
// console.log(canVote); // Outputs: Yes

// Nested Ternary Operator

// let score = 85;
// let grade = (score >= 90) ? "A" :
//             (score >= 80) ? "B" :
//             (score >= 70) ? "C" : "D";
// console.log(grade); // Outputs: B

//CODING CHALLANGE

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// const total = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value &{total}`);


//CODING CHALLANGE 2

// hour = 1;

// if (hour >= 5 && hour < 12) {
// 	console.log('Good Morning');
// } else if (hour >= 12 && hour < 17){
// 	console.log('Good Afternoon');
// }else{
// 	console.log('Good Evening');
// }


//A brief history of JAVASCRIPT
// 1995 - very first version of JavaScript (mad in just 10 days)- Brendan Eich 
//first JavaScript was called mocha and then LiveScript to JavaScript(mostly inorder to attract java Developers)

// 1997- with a need to standardize the language, ECMA releases ECMAScript 1 (ES1), the first official standard for JavaScript(ECMAScript is the standard, JavaScript the language in practice).

//2009 - ES5 (ECMAScript 5 )is released with lots of great new features
// (6 years later)


// 2015 - ES6/ES2015 (ECMAScript 2015) was released, the biggest update to the language ever!

//ECMASCRIPT changes to an annual release cycle in order to ship les features per update.

//2016 to infinity - release of ES2016/../../ES2019/../ES2021/../ES2089 and so on..

//JavaScript is Backwards Compatible(it does not break the WEB).
//-OLD features are never removed
//-Not really new versions, just incremental updates
//websites keep working forever



// "use strict";
// Your code here
// use strict is a literal string that tells the JavaScript engine to interpret the code under its scope in "strict mode." This mode enforces stricter parsing rules, throws errors for potential problems, and discourages practices that can lead to bugs.


//FUNCTIONS (33)


//function is a reusable block of code that performs a specific task and optionally returns a result.
// function logger() {
// 	console.log('My name is Jonas');

// }

// logger(); //invoking the function/ calling the function/ running the function
// logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }

// fruitProcessor(5, 0); 

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor (2, 4);
// console.log(appleOrangeJuice);


//FUNCTION DECLARATION VS EXPRESSIONS
// argument and parameter refer to concepts related to functions, and they are often used interchangeably.

// Defining a function with parameters
// function addNumbers(a, b) {
// 	return a + b;
// }

// Calling the function with arguments
// let result = addNumbers(5, 3);
// console.log(result);  // Outputs: 8


//function decleration

//function decleration can be called before declaring it
 
// function calcAgel(birthYear) {//the birthYear here is the parameter which is a kind of local variable that is ready to store a value that yo will later assign 
// 	return 2037 - birthYear;
// }

// const agel = calcAgel(1991); //the calcAgel(1991) is an argument that passes the value to the parameters that are ready to take on the values
// consolelog(agel);

//eg 2
// function greet(name) {  // Function declaration with name "greet"
// 	console.log("Hello, " + name + "!");
//  }
 
//  greet("Alice"); // You can call the function before it's defined
 


//function expression
// const calcAge2 = function (birthYear) { //the function has no name so it can be called an anonymus function 
// 	return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);//output: 46 46;

// //eg2
// const sayHi = function(name) {  // Function expression assigned to variable "sayHi"
// 	console.log("Hi, " + name + "!");
//  };
 
//  sayHi("Bob"); // You can only call the function after it's defined and assigned
 


 //Arrow FUNCTION
 //An arrow function is a shorthand syntax for defining a function. It uses an arrow (=>) to separate the function parameters (if any) from the function body.


//basic example
//  const add = (a, b) => a + b;
// console.log(add(5, 3)); // Outputs: 8




//FUNCTION calling other FUNCTION
// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }




// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);

// 	const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }
// fruitProcessor(2, 3);


// function greet() {
// 	console.log("Hello!");
// }

// function greetTwice() {
// 	greet();  // First call
// 	greet();  // Second call
// }

// greetTwice();

// //eg:3 
// function printSum(a, b) {
// 	console.log(a + b);
// }

// function calculateAndDisplaySum(x, y) {
// 	printSum(x, y);  // Passing data to printSum
// }

// calculateAndDisplaySum(5, 7);  // Outputs: 12

// //EG: 3
// function multiply(a, b) {
// 	return a * b;
// }

// function square(n) {
// 	return multiply(n, n);
// }

// function printSquareOfNumber(num) {
// 	let result = square(num);
// 	console.log("The square of", num, "is", result);
// }

// printSquareOfNumber(4);  // Outputs: The square of 4 is 16


// // EG:4
// function makeMultiplier(factor) {
// 	return function(number) {
// 		 return number * factor;
// 	};
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(5));  // Outputs: 10
// console.log(triple(5));  // Outputs: 15

// //eg:5
// function greet() {
// 	return "Hello";
// }

// function greetPerson(name) {
// 	let greeting = greet();
// 	console.log(`${greeting}, ${name}!`);
// }

// greetPerson('Sparsh');  // Outputs: Hello, Alice!

// //eg:6 
// function multiply(a, b) {
// 	return a * b;
// }

// function square(n) {
// 	return multiply(n, n);
// }

// console.log(square(5));  // Outputs: 25

// //eg:7
// function makeAdder(x) {
// 	return function(y) {
// 		 return x + y;
// 	};
// }

// const addFive = makeAdder(5);
// console.log(addFive(3));  // Outputs: 8

// //eg:8
// const numbers = [1, 2, 3];
// const doubled = numbers.map(function(num) {
//     return num * 2;
// });
// console.log(doubled);  // Outputs: [2, 4, 6]

// //eg:9
// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor (apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);
 
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
// 	return juice;
// }
// console.log(fruitProcessor(2, 3));

// //eg:10
// function calcAge(birthYear, firstName) { //parameters 
// 	const age = 2037 - birthYear;
// 	const name = firstName +' '+ 'Rai';
// 	console.log(`${name} is ${age} years old`);
// 	return age;

// }

// const age = calcAge(1991, 'Jonas') //arguements 


// //CODING CHALLANGE
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// }


// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins2, scoreKoalas2);
// checkWinner(scoreDolphins, scoreKoalas);



// //ARRAYS

// //In JavaScript, an array is a single, high-level, list-like object used to store multiple values as a single entity. Arrays allow you to store collections of data, whether they be numbers, strings, objects, or even other arrays. They are particularly useful when you need to work with large data sets, such as lists of user input or elements on a webpage.
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array (1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(years[0]);

// console.log(friends.length);
// console.log(years.length);

// console.log(friends[friends.length - 1]);
// console.log(years[years.length - 1]);

// friends [2] = 'Jay';
// console.log(friends);



// const firstName = 'Jonas';
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher',friends];

// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// // const calcAge = function (birthYear) {
// // 	return 2037 - birthYear;
// // }
// // const years1 = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years1));


// // Creating an array
// const fruits = ["Apple", "Banana", "Cherry"];

// // Accessing array elements
// console.log(fruits[0]); // Outputs: Apple
// console.log(fruits[2]); // Outputs: Cherry

// // Adding an element
// fruits.push("Date");

// // Looping through an array
// fruits.forEach(fruit => console.log(fruit));

// // Initializing an array with numbers
// const numbersQ = [1, 2, 3, 4, 5];

// // Adding elements at the start and end
// numbers.push(6); // Add to the end
// numbers.unshift(0); // Add to the start

// // Removing elements from the start and end
// const first = numbers.shift(); // Removes the first element
// const last = numbers.pop(); // Removes the last element

// // Using slice to create a new array
// const quickSlice = numbers.slice(1, 4); // Extracts elements at index 1 to 3

// console.log(quickSlice); // Outputs: [2, 3, 4]


// // Two arrays of numbers
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // Concatenating two arrays
// const combined = array1.concat(array2);

// // Mapping to a new array
// const multiplied = combined.map(x => x * 2);

// // Filtering the array
// const filtered = multiplied.filter(x => x > 8);

// // Reducing to a single value
// const sum = filtered.reduce((acc, x) => acc + x, 0);

// console.log(sum); // Outputs: 28 (10 + 12)

// Expert Example: Complex Array Operations

// Array of objects representing people
// const people = [
// 	{ name: "Alice", age: 25 },
// 	{ name: "Bob", age: 30 },
// 	{ name: "Charlie", age: 28 }
// ];

// Sorting by age
// people.sort((a, b) => a.age - b.age);

// // Finding a person
// const charlie = people.find(person => person.name === "Charlie");

// // Checking if all are older than 20
// const allOlderThan20 = people.every(person => person.age > 20);

// // Checking if any are older than 30
// const anyOlderThan30 = people.some(person => person.age > 30);

// console.log(charlie); // Outputs: { name: 'Charlie', age: 28 }
// console.log(allOlderThan20); // true
// console.log(anyOlderThan30); // false


// some useful array method?


//add elements
const friends = ['Michael', 'steven', 'peter;'];
const newLength = friends.push ('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John', 'carter');
console.log(friends);

//remove elements
friends.pop();//last
const popped = friends.pop();

console.log(friends);
console.log(popped);

//remove first element
friends.shift();//first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if (friends.includes('peter')) {
	console.log('You have a friend called peter');
}

if (friends.includes('steven')) {
	console.log('You have a friend called steven');
}

//coding challange
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		 return bill * 0.15; // 15% tip
// 	} else {
// 		 return bill * 0.20; // 20% tip
// 	}
// }

// // Array of bills
// const bills = [125, 555, 44];

// // Array of tips, calculated from each bill
// const tips = bills.map(bill => calcTip(bill));

// // Bonus: Array of totals (bill + tip)
// const totals = bills.map((bill, index) => bill + tips[index]);

// // Logging the results
// console.log('Bills:', bills);
// console.log('Tips:', tips);
// console.log('Totals:', totals);


//OBJECTS

// An object in JavaScript is a fundamental data structure that's used to store collections of data and more complex entities. In JavaScript, almost everything is an object, including functions and arrays
// An object can be seen as a collection of properties, with a property being an association between a name (or key) and a value. The value can be a function, a number, a string, or any other type, including another object. Objects in JavaScript are dynamic, meaning properties can usually be added and removed after creation.

// const jonasArray = [
// 	'jonas',
// 	'Schmedtmann',
// 	2037 - 1991,
// 	'teacher',
// 	['michael', 'peter', 'Steven']
// ];

// console.log(jonasArray[2]);

// const jonas = {
// 	firstName:'Jonas',
//    lastName: 'Schedmann',
// 	age: 2037 - 1991,
// 	job: 'teacher',
// 	friends:['Michael', 'Peter', 'Steven']

// };

// //How to retrieve data from objects and how to delete data from objects
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas.age);

// const nameKey = 'Name';
// console.log(jonas['first'+ nameKey]);
// console.log(jonas['last'+ nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firtName, lastName, age, job, and Friends');

// // if(jonas[interestedIn]) {
// // 	console.log(jonas[interestedIn]);
// // }else {
// // 	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// // }

// jonas.location = 'portugal'; 
// jonas['twitter']= '@jonasschmedtman';


// //challange 
// //Jonas has 3 friwnds, and his best friend is called michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);




//OBJECT METHODS


// const jonas = {
// 		firstName:'Jonas'   ,
// 		lastName: 'Schedmann',
// 		age:  1991,
// 		job: 'teacher',
// 		friends:['Michael', 'Peter', 'Steven'],
// 		hasDriversLicense: true,

//      calcAge: function(birthYear) {
// 		console.log(this);
// 		return 2037 - this.birthYear;
// 	  },
// 	  //any function that is attached to an object is called (Method).

// 	  getSummary: function() {
// 		return`${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// 	  }
// };
	

// console.log(jonas.calcAge(1991));
// // console.log(jonas['calcAge'](1991));

// // calcAge: function () {
// // 	this.age = 2037 - this.birthYear;
// // 	return this.age
// // }


// //Challange
// //"jonas is a 46 year old teacher, and he has a driver's license"

// console.log(jonas.getSummary());

// //CODING CHALLANGE
// const mark = {
// 	fullName: 'Mark Miller',
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function() {
// 		 this.bmi = this.mass / (this.height * this.height);
// 		 return this.bmi;
// 	}
// };

// const john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function() {
// 		 this.bmi = this.mass / (this.height * this.height);
// 		 return this.bmi;
// 	}
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
// 	console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
// } else if (john.bmi > mark.bmi) {
// 	console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
// } else {
// 	console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
// }

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi
	}

};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmu = this.mass / this.height ** 2;
		return this.bmi;
	}
};

mark.calcBMI();
john.calcBMI();

console.log(john.bmi, mark.bmi);

if(mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s bMI (${john.bmi}`)

} else if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}
//Objects in JavaScript are dynamic, meaning you can add or remove properties after an object is created. This flexibility is powerful but can also lead to more complex code and potential bugs if not managed carefully.
//JavaScript objects are integral to almost all aspects of JavaScript programming. They provide a flexible structure for grouping data and functionalities, making it easier to build scalable and maintainable software systems.







//(LOOPS)

// console.log('lifting weights repition 1');
// console.log('lifting weights repition 2');
// console.log('lifting weights repition 3');
// console.log('lifting weights repition 4');
// console.log('lifting weights repition 5');
// console.log('lifting weights repition 6');
// console.log('lifting weights repition 7');
// console.log('lifting weights repition 8');
// console.log('lifting weights repition 9');
// console.log('lifting weights repition 10');


//for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
	console.log(`lifting weights repition ${rep}'~'`);
}

//A for loop is a fundamental control flow statement in JavaScript that allows you to repeat a block of code multiple times. It provides a structured way to iterate over a specific sequence or collection of elements.
//for (initialization; condition; afterthought) {
  // Code to be executed repeatedly



  const jonas = [
	'jonas',                //[0]
	'Schmedtmann',//[1]
	2037 - 1991,//[2]
	'teacher',//[3]
	['michael', 'peter', 'Steven']//[4]
	
];

const types = [];
// console.log(jonas[4])

for (let i = 0; i < jonas.length; i++) {
	console.log(jonas[i], typeof jonas[i]);

	//filling an array
	types[i] = typeof jonas[i];
}

console.log(types)


//very very important implication of for loop
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);

}
console.log(ages);

//continue and break
console.log('---ONLY STRING---');
for (let i = 0; i < jonas.length; i++) {
	if(typeof jonas[i] !== 'string') continue; // if the type of the current element is not an string continue with the next iteration.

 console.log(jonas[i], typeof jonas[i]);
}


//what break does is completelt terminate the loop 
console.log('---BREAK with NUMBER---');
for (let i = 0; i < jonas.length; i++) {
	if(typeof jonas[i] !== 'number') break; // if the type of the current element is not an string continue with the next iteration.

 console.log(jonas[i], typeof jonas[i]);
}


//break
const numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 4) {
        console.log('Number 4 found, breaking loop!');
        break;
    }
    console.log('Number:', numbers[i]);
}
// Output:
// Number: 1
// Number: 2
// Number: 3
// Number 4 found, breaking loop!


//continue
const numberss = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] % 2 !== 0) { // Skip odd numbers
        continue;
    }
    console.log('Even number:', numberss[i]);
}
// Output:
// Even number: 2
// Even number: 4
// Even number: 6



//LOOPING BACKWARDS
const jonass = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true,
];

//0, 1, ...,4
//4, 3, ..., 0

for(let i = jonas.length - 1; i >= 0; i--) {
	console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`<------strating exercise ${exercise}----->`);

	for (let rep = 1 ; rep < 6; rep++) {
		console.log(`lifting weight repetition ${rep}`);
	}
}







//backwards loop
for (let i = 5; i >= 0; i--) {
	console.log("Counting down:", i);
 }
 

 const numbersss = [1, 2, 3, 4, 5];
numbersss.reverse();

for (let i = 0; i < numbersss.length; i++) {
  console.log("Reversed:", numbersss[i]);
}


for (let rep = 1; rep <= 10; rep++) {
	console.log(`lifting weights repitition ${rep}`)
}

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`Lifting weights repitition ${rep}`);
// 	rep ++;
// }




//The WHILE LOOP

for (let reps = 1; reps <= 10; reps++) {
	console.log(`Lifting weights repetition ${reps} `);
}


let rep = 1;
while (rep <= 10) {
	console.log(`WHILE: lifting weights repetition ${rep}`);
	rep++;

}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
	console.log(`you rolled a ${dice}`);
	dice=Math.trunc(Math.random() * 6) + 1;
	if (dice === 6 ) console.log('loop is about to end...');
}  


// The while loop is a fundamental control structure in JavaScript that is used to execute a block of code repeatedly as long as a specified condition evaluates to true. It is one of the primary ways to create loops in JavaScript, alongside for and do...while loops. The while loop is particularly useful when the number of iterations is not known before the loop starts.

while (condition) {
	// code block to be executed
 }
 

 let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;  // Increment the counter
}

// As long as counter remains less than 5, the loop continues to execute.


let n = 10; // Can be any positive integer
let sum = 0;
let current = 1;
while (current <= n) {
    sum += current;
    current++;
}
console.log("Sum:", sum);

let userInput;
while (isNaN(userInput)) {
    userInput = prompt("Please enter a valid number:");
    userInput = Number(userInput);
}
console.log("Valid number entered:", userInput);


// Objective: Find all prime numbers up to a specified number n.
let nS = 30; // Find primes up to 30
let number = 2;
while (number <= n) {
    let isPrime = true;
    let factor = 2;
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            isPrime = false;
            break;
        }
        factor++;
    }
    if (isPrime) {
        console.log(number, "is a prime number");
    }
    number++;
}











//how to fail at learning code 
//--dont have a clear goal in the beginning og your journey
//--just copy the code without caring and understanding how it works, just copy and paste the code
//--dont reinforce what you are learning by doing small challanges or taking notes
//--dont practice coding and dont come up with your own project ideas
//--became frustrated when your code is not perfectly clean or effecient
//--losing motivation quickly because thinking that you could never know everything
//--learning is isolation whithout sharing your process


//after finishing a couple courses you think that you are a web developer and could start applying to jons but you cannot even build your own app



//[ How to Think Like a Developer: Become a Problem Solver!

// first make sure you 100 % understand the problem, ask the right questions to get a clear picture of the probelm

//Divide and Conquer Strategy: Break a big problem into smaller sub-problems

//Research as much as you can and as much as you have to (resaercgins is a huge part of a programmers JOB).

//for bigger problems write pseudo-code,] -----four step framw work


// Understand the Problem
// Research and Gather Information
// Plan Your Approach
// Write Clean Code
// Debug and Optimize
// Continuous Learning
// Think Critically and Creatively
// Collaborate and Communicate
// Reflect and Improve




//DEBUGGING : Debugging is the process of identifying and fixing errors, or bugs, in a computer program.  These bugs can cause crashes, incorrect outputs, security vulnerabilities, and more.  In essence, it's like being a detective for software!

// SoftWare Bug: Defect or Problem in a computer program Basically, any unexpected or unintended behavior of a computer program is a software bug

//Bugs are completely normal in Software Development

// IDENTIFY (Becoming aware that there is a bug)-> FIND (isolating where exactly the bug is happening in code) -> FIX ( correct the bug) -> PREVENT (preventing it from happening again)



//What is DOM AND WHAT IS DOM MANIPULATION (WHAT IS THE DOM AND HOW IT ACTUALLY WORKS)
// DOCUMENT OBJECT MODEL: STRUCTURED REPRESENTATION OF HTML DOCUMENTS THAT ALLOWS JAVASCRIPT TO ACCESS HTML ELEMENTS AND STYLES TO MANIPULATE THEM.  (CHANGE TEXT, html attributes and even CSS styles)

//WE CAN SAY THAT DOM IS BASICALLY THE CONNECTION POINT BETWEEN HTML DOCUMENTS AND JAVASCRIPT CODE

//THE DOM IS AUTOMATICALLY CREATED BY THE BROWSER AS SOON AS THE HTML PAGE LOADS.

//API STANDS FOR APPLICATION PROGRAMMING INTERFACE

// Events in JavaScript are actions that occur on a web page due to user interaction, such as clicking a button. When an event occurs, the app fires the event, which is a signal that an event has occurred. The app then responds to the user through event handlers in JavaScript. An event handler is a function with a block of code that is executed or triggered when a specific event fires

// const toggleButton = document.getElementById("toggleButton");
//   const paragraph = document.getElementById("myParagraph");

//   toggleButton.addEventListener("click", function() {
//     if (paragraph.style.display === "none") {
//       paragraph.style.display = "block"; // Show the paragraph
//     } else {
//       paragraph.style.display = "none"; // Hide the paragraph
//     }
//   });




// KEY EVENTS 
// Key events are fired when a user interacts with the keyboard. JavaScript provides several types of key events to capture these interactions, allowing developers to execute code in response.















//WHAT IS JAVASCRPT ( HIGH LEVEL OVERVIEW)
// HOW JAVASCIPT WORKS BEHIND THE SCENES
// JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED, MULTI-PARADIGM, INTERPRETED OR JUST IN TIME COMPILED,DYNAMIC ,SINGLE THREADED, GARBAGE-COLLECTED PROGRAMMING LANGUAGE WITH FIRST-CLASS FUNCTIONS AND NON-BLOCKING EVENT LOOP CONCURRENCY MODEL

// UNPACKING THE DEFINITION


// Certainly! Let's break down the comprehensive definition of JavaScript into simpler, more understandable components:

// ### JavaScript Definition Breakdown

// 1. **High-Level**:
//    - **Explanation**: JavaScript is a high-level programming language, which means it abstracts away most of the complex details of the computer's hardware. You don't have to manage memory manually or deal with low-level operations.
//    - **Analogy**: It's like driving a car with an automatic transmission rather than a manual one. You focus on where you want to go, not on how the gears are shifted.

// 2. **Prototype-Based Object-Oriented**:
//    - **Explanation**: JavaScript uses prototypes for inheritance instead of classes (though ES6 introduced a class syntax, it’s still based on prototypes). Objects can inherit properties and methods from other objects.
//    - **Analogy**: Think of a prototype as a blueprint. If you create a new object, it can use another object's blueprint for its properties and methods.

// 3. **Multi-Paradigm**:
//    - **Explanation**: JavaScript supports different programming paradigms, including procedural, object-oriented, and functional programming. This flexibility allows developers to use various styles and techniques to solve problems.
//    - **Analogy**: It's like being able to switch between different types of sports (like basketball, soccer, and tennis) depending on what you enjoy or need at the moment.

// 4. **Interpreted or Just-In-Time (JIT) Compiled**:
//    - **Explanation**: JavaScript can be interpreted, meaning the code is executed line-by-line. Modern JavaScript engines use JIT compilation to convert JavaScript code into executable machine code just before execution, improving performance.
//    - **Analogy**: Interpreted code is like reading a book out loud, one page at a time. JIT compilation is like memorizing parts of the book so you can recite them more quickly.

// 5. **Dynamic**:
//    - **Explanation**: JavaScript is dynamic, meaning types are determined at runtime rather than compile-time. Variables can hold any type of value and can change types over time.
//    - **Analogy**: It's like a flexible container that can hold different things at different times—a box that can store toys, books, or clothes without changing its shape.

// 6. **Single-Threaded**:
//    - **Explanation**: JavaScript runs on a single thread, meaning it executes one task at a time. This can lead to performance bottlenecks if not managed properly.
//    - **Analogy**: Imagine a single-lane road where only one car can pass at a time. Traffic can build up if the cars don't move efficiently.

// 7. **Garbage-Collected**:
//    - **Explanation**: JavaScript automatically manages memory allocation and deallocation. The garbage collector periodically identifies and frees up memory that is no longer in use.
//    - **Analogy**: It’s like having a cleaning service that regularly comes to your house and removes things you no longer need.

// 8. **First-Class Functions**:
//    - **Explanation**: In JavaScript, functions are first-class citizens. This means they can be assigned to variables, passed as arguments, returned from other functions, and have properties and methods.
//    - **Analogy**: Functions in JavaScript are like people who can hold different jobs, move between different roles, and perform various tasks as needed.

// 9. **Non-Blocking Event Loop Concurrency Model**:
//    - **Explanation**: JavaScript uses an event loop to handle asynchronous operations. Instead of waiting for a task to complete, JavaScript continues executing other tasks and processes the result of the asynchronous task when it's ready.
//    - **Analogy**: Think of a restaurant kitchen. While a chef waits for water to boil, they can start preparing other dishes. When the water is ready, they return to it without delaying the preparation of other food.

// ### Summary with Simplified Terms

// - **High-Level**: Easy to use, abstracts hardware details.
// - **Prototype-Based Object-Oriented**: Inherits features from other objects.
// - **Multi-Paradigm**: Supports various programming styles.
// - **Interpreted or JIT Compiled**: Executes line-by-line or compiles just in time.
// - **Dynamic**: Flexible with types, determined at runtime.
// - **Single-Threaded**: Runs one task at a time.
// - **Garbage-Collected**: Automatically manages memory.
// - **First-Class Functions**: Functions can be used like variables.
// - **Non-Blocking Event Loop**: Efficiently handles asynchronous tasks.

// ### Example to Illustrate Concepts

// Here's a simple JavaScript example that touches on several of these concepts:

// ```javascript
// // High-level, dynamic, prototype-based, first-class functions

// // Creating an object with a method (prototype-based)
// let person = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// // Adding a method using prototype
// person.__proto__.sayGoodbye = function() {
//   console.log(`${this.name} says goodbye!`);
// };

// // Dynamic typing
// let age = 25; // Number
// age = "twenty-five"; // String

// // First-class functions
// function callFunction(fn) {
//   fn();
// }

// callFunction(person.greet.bind(person)); // "Hello, my name is Alice"

// // Non-blocking event loop with asynchronous function
// console.log("Start");

// setTimeout(() => {
//   console.log("Async task complete");
// }, 1000); // Non-blocking

// console.log("End");
// ```

// **Explanation**:
// - **High-Level**: The code is easy to write and understand.
// - **Prototype-Based**: The `sayGoodbye` method is added to the prototype of the `person` object.
// - **Dynamic**: The `age` variable changes type from a number to a string.
// - **First-Class Functions**: The `callFunction` function takes another function as an argument and calls it.
// - **Non-Blocking Event Loop**: `setTimeout` is used to demonstrate asynchronous behavior. "Start" and "End" are logged immediately, while "Async task complete" is logged after 1 second.

// By understanding these individual components, you can better appreciate the versatility and power of JavaScript as a programming language.



// what is JAVASRIP engine?
// program that excutes JavaScript CODE

` `
// Compilation vs. Interpretation
// Compilation:

// Definition: Compilation is the process of translating high-level source code into machine code (binary code) before execution.
// Process: The entire source code is translated into machine code by a compiler, which then generates an executable file. This file can be run multiple times without the need for recompilation.
// Examples: Languages like C, C++, and Rust are typically compiled.
// Advantages:

// Performance: Compiled code is generally faster because it is translated into machine code ahead of time and optimized by the compiler.
// Optimization: Compilers can perform extensive optimizations to improve runtime performance.
// Disadvantages:

// Development Cycle: The compile-run-debug cycle can be slower because you need to recompile the entire program after making changes.
// Interpretation:

// Definition: Interpretation is the process of translating high-level source code into machine code on the fly, during execution.
// Process: An interpreter reads the source code line by line, translates it into machine code, and executes it immediately. There is no intermediate executable file.
// Examples: Languages like Python, Ruby, and older versions of JavaScript are typically interpreted.
// Advantages:

// Ease of Development: Immediate execution allows for quick testing and debugging.
// Portability: Interpreted code can be run on any platform with the appropriate interpreter.
// Disadvantages:

// Performance: Interpreted code is generally slower because the translation happens at runtime.
// JavaScript: A Mix of Compilation and Interpretation
// Modern JavaScript engines, such as V8 (used by Google Chrome and Node.js), use a combination of both compilation and interpretation techniques to achieve the best performance. This approach is known as Just-In-Time (JIT) compilation.

// How JavaScript Engines Use a Mix of Both
// Parsing:

// The JavaScript engine first parses the source code to check for syntax errors and create an Abstract Syntax Tree (AST).
// Analogy: Think of parsing as reading a recipe and making sure all the instructions are understandable and correctly written.
// Initial Interpretation (Bytecode Generation):

// Instead of directly interpreting the source code line by line, the engine generates an intermediate representation called bytecode from the AST.
// Analogy: Bytecode is like a simplified version of the recipe, written in a way that a cooking robot can easily follow.
// Execution:

// The engine starts by interpreting the bytecode using a baseline interpreter. This allows for quick startup times since the code can begin executing almost immediately.
// Analogy: The cooking robot starts following the simplified recipe step by step.
// Profiling and Optimization (JIT Compilation):

// As the code runs, the engine profiles the execution to identify "hot" code paths (frequently executed parts of the code).
// The JIT compiler then compiles these hot paths into highly optimized machine code.
// Analogy: As the robot chef repeatedly makes the same dish, it learns more efficient ways to prepare it and optimizes its actions accordingly.
// Deoptimization:

// If the assumptions made during JIT compilation are invalidated (e.g., a variable changes type), the engine can revert to the less optimized bytecode and re-optimize as necessary.
// Analogy: If the robot chef encounters a new type of ingredient that requires different handling, it temporarily goes back to the original instructions and then re-learns the optimal way.


// JavaScript Runtime in the Browser
// The JavaScript runtime in the browser refers to the environment in which JavaScript code is executed. This environment is provided by the browser and includes several key components:

// JavaScript Engine
// Call Stack
// Heap
// Event Loop
// Callback Queue
// Web APIs
// Let's go through each component in detail:

// 1. JavaScript Engine
// The JavaScript engine is responsible for executing JavaScript code. Each browser has its own engine (e.g., V8 in Chrome, SpiderMonkey in Firefox). The engine includes:

// Parser: Converts JavaScript code into an Abstract Syntax Tree (AST).
// Interpreter: Executes the AST by converting it into bytecode.
// JIT Compiler: Optimizes frequently executed code by compiling it into machine code.
// 2. Call Stack
// The call stack is a data structure that keeps track of function calls. When a function is called, it's added to the top of the stack. When the function returns, it’s removed from the top of the stack.

// Analogy: Think of the call stack as a stack of plates. Each time you call a function, you place a new plate on top. When a function finishes, you remove the top plate.

// 3. Heap
// The heap is a region of memory where objects are stored. It’s an unstructured memory pool used for dynamic memory allocation.

// Analogy: Imagine the heap as a storage room where you can place items (objects) without any particular order.

// 4. Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations, even though it’s single-threaded. It continually checks the call stack to see if it's empty and processes events from the callback queue when the stack is empty.

// Analogy: The event loop is like a waiter checking if there are any orders to take (callbacks) once the chef (call stack) is free.

// 5. Callback Queue
// The callback queue is a queue of tasks that are waiting to be executed. These tasks include callbacks from asynchronous operations like timers, network requests, or DOM events.

// Analogy: The callback queue is like a line of customers waiting to place their orders. When the chef (call stack) is free, the waiter (event loop) takes the next customer (callback) from the line.

// 6. Web APIs
// Web APIs are provided by the browser to handle asynchronous operations like setTimeout, fetch, DOM events, etc. These APIs run outside the JavaScript engine.

// Analogy: Web APIs are like kitchen appliances (oven, mixer) that can operate independently of the chef.
