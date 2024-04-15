const containerEl = document.querySelector(".container"); // Assuming an element with class "container" exists

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  // Set the text content with proper article usage ("an" or "a")
  containerEl.textContent = `<h1> I am ${careers[careerIndex].charAt(0) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  // Update character index and career index
  characterIndex++;
  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;
  }

  // Loop back to the beginning if all careers and characters are displayed
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  // Call updateText again after a delay (400 milliseconds)
  setTimeout(updateText, 400);
}
