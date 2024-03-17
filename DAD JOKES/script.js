const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke() 

//USIMG ASYNC/AWAIT with fetch

async function generateJoke() {
   const config =   {
      headers: {
         'Accept': 'application/json'
      }
   }
//    fetch('https://icanhazdadjoke.com', config)
//    .then((res) => res.json())
//    .then((data) => {
//       jokeEL.innerHTML = data.joke 
//    })
}

const res = await fetch ('https://icanhazdadjoke.com', config)
const data = await res.json()

jokeEL.innerHTML = data.joke 



jokeBtn.addEventListener('click', generateJoke)
