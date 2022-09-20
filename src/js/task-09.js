function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorButton = body.querySelector(".change-color");
const color = body.querySelector(".color");
changeColorButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
