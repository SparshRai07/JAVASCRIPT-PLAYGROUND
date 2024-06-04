'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i <btnsOpenModal.length; i++)
   btnsOpenModal[i].addEventListener('click', function () {
 console.log('Button clicked');
 modal.classList.remove('hidden',);
 overlay.classList.remove('hidden');


 

});

// btnCloseModal.addEventListener('click', function() {
const closeModal = function () {
modal.classList.add('hidden');
overlay.classList.add('hidden');
};


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// overlay.addEventListener('click', function() {
//    modal.classList.add('hidden');
//    overlay.classList.add('hidden');
// })

document.addEventListener('keydown', function(e) {
   console.log ('e.key');

//    if(e.key === 'escape') {
//       if (modal.classList.contains('hidden')) {
//          closeModal();
//       }
// // if the escape key is pressed and the model does not conatin the hidden class then execute  the function
//    }
//       // console.log('escape was pressed');




if (e.key === 'Escape' && !modal.classList.contains('hidden')){
   closeModal();
}

});

