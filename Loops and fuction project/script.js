document.getElementById('for-beginner').addEventListener('click', function() {
   const output = document.getElementById('for-output');
   let result = '';
   for (let i = 0; i < 5; i++) {
       result += `Number: ${i} `;
   }
   output.textContent = result;
});

document.getElementById('for-intermediate').addEventListener('click', function() {
   const output = document.getElementById('for-output');
   let result = '';
   for (let i = 5; i > 0; i--) {
       result += `Countdown: ${i} `;
   }
   output.textContent = result;
});

document.getElementById('for-hard').addEventListener('click', function() {
   const output = document.getElementById('for-output');
   let result = '';
   for (let i = 0; i < 10; i += 2) {
       result += `Even numbers: ${i} `;
   }
   output.textContent = result;
});

document.getElementById('while-beginner').addEventListener('click', function() {
   const output = document.getElementById('while-output');
   let i = 0;
   let result = '';
   while (i < 3) {
       result += `Low count: ${i} `;
       i++;
   }
   output.textContent = result;
});

document.getElementById('while-intermediate').addEventListener('click', function() {
   const output = document.getElementById('while-output');
   let i = 3;
   let result = '';
   while (i > 0) {
       result += `Reverse count: ${i} `;
       i--;
   }
   output.textContent = result;
});

document.getElementById('while-hard').addEventListener('click', function() {
   const output = document.getElementById('while-output');
   let i = 0;
   let result = '';
   while (i < 10) {
       if (i % 3 === 0) { // Print multiples of 3
           result += `Multiples of 3: ${i} `;
       }
       i++;
   }
   output.textContent = result;
});

document.getElementById('function-beginner').addEventListener('click', function() {
   const output = document.getElementById('function-output');
   function sayHello() {
       return "Hello!";
   }
   output.textContent = sayHello();
});

document.getElementById('function-intermediate').addEventListener('click', function() {
   const output = document.getElementById('function-output');
   function greet(name) {
       return `Hello, ${name}!`;
   }
   output.textContent = greet('Visitor');
});

document.getElementById('function-hard').addEventListener('click', function() {
   const output = document.getElementById('function-output');
   function factorial(n) {
       let result = 1;
       for (let i = 1; i <= n; i++) {
           result *= i;
       }
       return result;
   }
   output.textContent = `Factorial of 5 is ${factorial(5)}`;
});
