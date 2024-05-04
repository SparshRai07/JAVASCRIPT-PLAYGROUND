const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
   counterEl.innerText = "0";
   incrementCounter();
   

   function incrementCounter(){
      let  currentNum = +counterEl.innerText;
      const dataCeil = +counterEl.getAttribute("data-ceil");
      const increment = (dataCeil - currentNum) / 15 
      currentNum = Math.ceil (currentNum + increment) 
      counterEl.innerText = currentNum

      if(currentNum < dataCeil){
         setTimeout(incrementCounter, 50)
      }
   }
})
