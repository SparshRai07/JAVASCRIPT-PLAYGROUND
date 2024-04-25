const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0; // This will hold the current rotation angle
let timer; // This will hold the reference to the timeout for auto-rotation

// Set up the event listener for the "Previous" button
prevEl.addEventListener("click", () => {
    x += 45; // Increase the rotation angle by 45 degrees
    updateGallery(); // Update the gallery rotation based on the new angle
    restartAutoRotate(); // Reset the auto-rotation timer
});

// Set up the event listener for the "Next" button
nextEl.addEventListener("click", () => {
    x -= 45; // Decrease the rotation angle by 45 degrees
    updateGallery(); // Update the gallery rotation based on the new angle
    restartAutoRotate(); // Reset the auto-rotation timer
});

// Function to update the gallery rotation
function updateGallery() {
    clearTimeout(timer); // Clear any existing timers to avoid overlaps
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    setupAutoRotate(); // Setup the auto-rotate function again after updating
}

// Function to setup auto rotation
function setupAutoRotate() {
    timer = setTimeout(() => {
        x -= 45; // Continue rotating the gallery automatically
        updateGallery();
    }, 3000);
}

// Function to restart the auto-rotation
function restartAutoRotate() {
    clearTimeout(timer); // Clear the existing timer
    setupAutoRotate(); // Start a new auto-rotation timer
}

// Initial call to start the rotation when the page loads
setupAutoRotate();
