const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes); // this code will trigger the checkBoxes function whenever the user scrolls, and checkBoxes will then run and potentially manipulate the DOM. It will be used in a way that is common to many web pages: when the user scrolls, the page may want to change its appearance or load new content based on where the user is in the page.


checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.8 // 80% of the window height

  boxes.forEach(box => {
   const boxTop = box.getBoundingClientRect().top

   if(boxTop < triggerBottom && boxTop > 0) { // check that the box is within the 80% of the window height, and also that it is not below the window
      box.classList.add('show')

   }else {
      box.classList.remove('show')
   }
 
})
}

