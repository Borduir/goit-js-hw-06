'use strict'
const counterValue = document.querySelector('#value');
const subtractionButton = document.querySelector('#value').previousSibling.previousSibling;
const addButton = document.querySelector('#value').nextSibling.nextSibling;
let total = 0;
subtractionButton.addEventListener('click', () => {
    total -= 1
})
addButton.addEventListener('click', () => {
    total += 1
})