
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
   const date = new Date();
   let h = date.getHours();
   let m = date.getMinutes();
   let s = date.getSeconds();
   let ampm = h >= 12 ? "PM" : "AM";

   if (h == 0) {
       h = 12; // midnight case
   } else if (h > 12) {
       h -= 12; // convert to 12-hour format
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

   hourEl.innerText = h;
   minuteEl.innerText = m;
   secondEl.innerText = s;
   ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000); // Automatically update the clock every second
