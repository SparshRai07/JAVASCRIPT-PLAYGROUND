document.addEventListener('DOMContentLoaded', function() {
   const greetingElement = document.getElementById('greeting');
   const timeDisplayElement = document.getElementById('time-display');
   const form = document.getElementById('feedback-form');
   const responseElement = document.getElementById('response');

   // Function to update greeting based on the current time
   function updateGreeting() {
       const now = new Date();
       const hour = now.getHours();
       let greeting;

       if (hour < 12) {
           greeting = 'Good morning!';
           document.body.style.backgroundColor = '#FFDAB9'; // Peach
       } else if (hour < 18) {
           greeting = 'Good afternoon!';
           document.body.style.backgroundColor = '#F0E68C'; // Khaki
       } else {
           greeting = 'Good evening!';
           document.body.style.backgroundColor = '#B0C4DE'; // Light Steel Blue
       }

       greetingElement.textContent = greeting;
       timeDisplayElement.textContent = now.toLocaleTimeString();
   }

   // Function to handle form submission
   function handleFormSubmit(event) {
       event.preventDefault();
       const name = document.getElementById('name').value;
       if (name) {
           responseElement.textContent = `Hello, ${name}! Welcome to our site.`;
       } else {
           responseElement.textContent = 'Please enter your name.';
       }
   }

   // Update greeting and time every second
   setInterval(updateGreeting, 1000);

   // Event listener for form submission
   form.addEventListener('submit', handleFormSubmit);
});
