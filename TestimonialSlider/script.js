const testimonial = [{
   
   name: "Alex Rodriguez",
   photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMHBob3RvfGVufDB8fDB8fHww",
   text: "I'm speechless (well, almost). This website is the perfect combo of killer CSS and smooth JavaScript. Frontend goals achieved!"
},
{
   
   name: "James Rodri",
   photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
   text: "Warning: This project may cause extreme satisfaction due to its responsive design and user-friendly interface. Use responsibly"
},
{
   
   name: "Michael Jordan",
   photoUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
   text: "Forget everything you thought you knew about websites. This one redefines the game with cutting-edge code and stunning visuals."
},
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const userNameEl = document.querySelector(".username");


let idx = 0;

function updateTestimonial() {
   const {name, photoUrl, text} = testimonials[idx];
   imgEl.src = photoUrl;
   textEl.innerText = text;
   userNameEl.innerText = name;
   idx ++;
   if(idx === testimonials.length) {
      idx = 0;

   }
   setTimeout(()=> {
     updateTestimonial();
   },10000);
}