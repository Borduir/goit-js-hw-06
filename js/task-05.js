"use strict";
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
let total = "";
input.addEventListener("keyup", (event) => {
  output.textContent = input.value;
  if (input.value === "") {
    output.textContent = "Anonymous";
  }
});
