'use strict';


const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');//there also exists getElemenById
// console.log('score0');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;




score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add = ('hidden');

//Rolling the dice functionality

btnRoll.addEventListener('click', function(){
//1. Generating a random dice roll
const dice = Math.trunc(Math.random()* 6) + 1;


//2. Display dice
diceEL.classList.remove('hidden');
diceEL.src = `dice-${dice}.png`;



//3.Check for rolled 1: if true, switch to next player 
if (dice !== 1){
  //add dice to current score
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  // current0El.textContent = currentScore;
}else {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');




}
});


// Holding Current Score 
btnHold.addEventListener('click', function () {
//1. Add current score to active player's score
scores [activePlayer] += currentScore;
// scores[1] + currentScore;
document.getElementById(`current--${activePlayer}`).textContent = 
scores(activePlayer);


//2. check if player's score is >= 100 
//

})

