const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
   score=0;
}

const correctAns = num1 * num2;

formEl.addEventListener("submit", (e)=> {
   e.preventDefault();
   const userAns = parseInt(inputEl.value);
   if(userAns === correctAns) {
      score++;
      updateScore();
      newQuestion();
   }else{
      updateScore();
   }

   inputEl.value = "";
   inputEl.focus();
});


function updateScore() {
   const scoreEl = document.getElementById("score");
   scoreEl.innerText = `score: ${score}`;
   localStorage.setItem("score", JSON.stringify(score) )
}

function newQuestion() {
   const num1 = Math.ceil(Math.random()*10);
   const num2 = Math.ceil(Math.random()*10);
   const question = `What is ${num1} multiplied by ${num2}?`;

   questionEl.innerText = question;
   correctAns = num1 * num2;
};

newQuestion();
