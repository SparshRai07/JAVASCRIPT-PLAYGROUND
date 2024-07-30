//Destructuring is a powerful feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. This feature makes it easier to extract and use data without having to write repetitive code.

//DESTRUCTURING ONJECTS
//Destructuring objects involves breaking down an object into its individual properties and assigning those properties to variables.

//This can be especially useful when working with complex data structures, APIs, or libraries where you need to access specific pieces of data frequently.

// Extracting Properties:
const user = { username: 'Alice', email: 'alice@example.com' };
const { username, email } = user;
console.log(username); // 'Alice'
console.log(email); // 'alice@example.com'


// Renaming Variables:
const user1 = { username: 'Alice', email: 'alice@example.com' };
const { username: userName, email: userEmail } = user1;
console.log(userName); // 'Alice'
console.log(userEmail); // 'alice@example.com'



// Default Values:
const user2 = { username: 'Alice' };
const { usernamee, emaill = 'not provided' } = user2;
console.log(usernamee); // 'Alice'
console.log(emaill); // 'not provided'



// Nested Objects:
const user4 = {
   username: 'Alice',
   address: {
     city: 'Wonderland',
     country: 'Fantasy'
   }
 };
 
 const {
   address: { city, country }
 } = user4;
 console.log(city); // 'Wonderland'
 console.log(country); // 'Fantasy'