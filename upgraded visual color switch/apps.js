document.addEventListener('DOMContentLoaded', function() {
   
   const buttons = document.querySelectorAll('.button');

   
   function changeBackgroundColor(color) {
       document.body.style.backgroundColor = color;
   }

   
   buttons.forEach(button => {
       button.addEventListener('click', function() {
           const color = this.getAttribute('id'); // Get color from button's ID
           changeBackgroundColor(color);
       });
   });
});
