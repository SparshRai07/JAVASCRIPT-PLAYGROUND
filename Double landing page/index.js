const containerEl = document.querySelector("container")

const leftEl = document.querySelector(".left")

const rightEL = document.querySelector(".right")


leftEl.addEventListener("mouseenter", ()=> {
   containerEl.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", ()=> {
   containerEl.classList.remove("active-left");
});

rightEL.addEventListener("mouseenter", ()=> {
   containerEl.classList.add("active-right");
});

rightEL.addEventListener("mouseleave", ()=> {
   containerEl.classList.remove("active-right");
})
 
