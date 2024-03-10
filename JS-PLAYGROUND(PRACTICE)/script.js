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

const firstName = 'Sparsh';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// const jonas = "i'm" + firstName + ',a' + (year - birthYear) + ' years old' + jon + '!';
// console.log(jonas);

//TEMPLATE LITERALS
const jonasNew = `i'm  ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log (jonasNew);


//Make a habit of checking the console for possible mistakes and possible errors
console.log(`just a regular string ...`);

console.log("checking if console.log prints other things");

//strings with multiple linnes 
console.log (`String with \n\ multiple \n\ lines`);

//Can be achieved similar result just using backtick
console.log(`String
multiple
lines`);



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

const inputYear = '1991';
console.log (inputYear); 
console.log(Number(inputYear) + 10); //Output: 2001//
console.log(Number(inputYear) + inputYear); //Output: 19911991// 
console.log(Number(inputYear) + Number(inputYear)); //Output: 3982//

console.log(Number);

console.log( String(23), 23);

//TYPE COERCION

console.log(`I am ${23} years old`); // output: I am 23 years old

console.log('23' - '10' -3 ); // output: 10
console.log('23' + '10' +3 ); // output: 23103
console.log('23' * '2') //output: 46

let n = '1' + 1; //11
n = n-1; //10
console.log(n);
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

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if  (money) {
   console.log("Dont spend it all;");
} else {
   console.log('you should get a job!');
}

let height;
if (height) {
   console.log('YaY! Height is defined');

}else{
   console.log('Height is UNDEFINED');
}

 //Equality Operators

 
  

 
 

