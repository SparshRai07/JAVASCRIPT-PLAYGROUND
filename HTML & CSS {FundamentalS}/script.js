// Script to add interactivity to the navigation links
document.addEventListener('DOMContentLoaded', (event) => {
   const navLinks = document.querySelectorAll('nav a');
   navLinks.forEach(link => {
       link.addEventListener('click', (e) => {
           navLinks.forEach(link => link.classList.remove('active'));
           e.target.classList.add('active');
       });
   });
});

// Script to validate the contact form
document.addEventListener('DOMContentLoaded', (event) => {
   const form = document.querySelector('form');
   form.addEventListener('submit', (e) => {
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;
       
       if (name === '' || email === '' || message === '') {
           alert('Please fill out all fields');
           e.preventDefault();
       } else if (!validateEmail(email)) {
           alert('Please enter a valid email address');
           e.preventDefault();
       }
   });

   function validateEmail(email) {
       const re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\.,;:\s@"]+\.)+[^<>()\[\]\.,;:\s@"]{2,})$/i;
       return re.test(String(email).toLowerCase());
   }
});
