"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector(`button[data-create]`);
const destroyButton = document.querySelector(`button[data-destroy]`);
const input = document.querySelector(`input`);
const boxes = document.querySelector(`#boxes`);
let divsArray = [];
let divCount = 0;
const createBoxes = createButton.addEventListener("click", (amount) => {
  amount = Number(input.value);
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = 30 + 10 * divCount + "px";
    div.style.height = 30 + 10 * divCount + "px";
    divsArray.push(div);
    divCount += 1;
  }
  boxes.append(...divsArray);
});
const destroyBoxes = destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  divsArray = [];
  divCount = 0;
});
