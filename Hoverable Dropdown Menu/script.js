// script.js
document.addEventListener('DOMContentLoaded', () => {
   const button = document.getElementById('dropdownButton');
   const menu = document.getElementById('dropdownMenu');
 
   button.addEventListener('click', () => {
     menu.classList.toggle('show');
   });
 
   // Close the dropdown if clicked outside
   window.addEventListener('click', (event) => {
     if (!event.target.closest('.dropdown')) {
       menu.classList.remove('show');
     }
   });
 });
 