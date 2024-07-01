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







// Execution Contexts
// An execution context is an environment where JavaScript code is evaluated and executed. There are three main types of execution contexts:

// Global Execution Context:

// Created when the JavaScript file starts executing.
// There is only one global execution context per JavaScript program.
// It creates a global object (window in browsers) and sets up the global scope.
// Function Execution Context:

// Created whenever a function is called.
// Each function call creates a new execution context.
// It sets up the function's scope, which includes the arguments passed to the function, local variables, and the this keyword.
// Eval Execution Context:

// Created when code is executed inside an eval function (not commonly used and generally discouraged).
// Components of Execution Context
// Each execution context has two main phases:

// Creation Phase:

// Variable Object (VO): Contains function arguments, inner variable declarations, and function declarations.
// Scope Chain: Contains the current variable object and its outer scope.
// this Binding: Determines the value of this keyword.
// Execution Phase:

// Code is executed line by line.
// Variables and functions are assigned values.
// Call Stack
// The call stack is a data structure that keeps track of execution contexts in the order they are created. It follows the Last-In-First-Out (LIFO) principle. Here’s how it works:

// When JavaScript starts executing:

// The global execution context is created and pushed onto the call stack.
// When a function is called:

// A new function execution context is created and pushed onto the call stack.
// The function's code is executed.
// When the function finishes executing:

// The function execution context is popped off the call stack.
// Control returns to the previous execution context.

 

//HOISTING
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (either the global scope or the function scope) before the code is executed.


// Temporal Dead Zone (TDZ)
// Definition:
// The Temporal Dead Zone (TDZ) is the period between the entering of a block scope and the point at which a variable declared with let or const is initialized. During this period, accessing the variable will throw a ReferenceError.


