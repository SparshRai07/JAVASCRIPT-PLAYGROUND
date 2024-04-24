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

const age = 23;
age>=18? console.log('drink wine')
: console.log('drink water')


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
	drink2 = 'wine..wine';
} else {
 
	drink2 = 'water..water';
}

console.log(drink2);

//TERNARY OPERATOR

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);


let Bage = 20;
let canVote = (Bage >= 18) ? "Yes" : "No";
console.log(canVote); // Outputs: Yes

// Nested Ternary Operator

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" : "D";
console.log(grade); // Outputs: B

//CODING CHALLANGE

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value &{total}`);


//CODING CHALLANGE 2

hour = 1;

if (hour >= 5 && hour < 12) {
	console.log('Good Morning');
} else if (hour >= 12 && hour < 17){
	console.log('Good Afternoon');
}else{
	console.log('Good Evening');
}


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