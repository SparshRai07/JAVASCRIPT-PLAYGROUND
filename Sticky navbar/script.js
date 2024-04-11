const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
   if (window.scrollY >= bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
      navbarEl.classList.add("active");
   } else {

      navbarEl.classList.remove("active");
   }

});

/*
The code was not working as it was supposed to because I was using ">" instead of ">=" in the if statement. 
"window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50" will only be true when the scroll position is greater than the specified value. 
However, we want the class to be added when the scroll position is greater than or equal to the specified value. 
Replacing ">" with ">=" solves the problem. 
*/
