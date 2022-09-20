'use strict'
const counterValue = document.querySelector('#value');
const subtractionButton = document.querySelector('button[data-action="decrement"]');
const addButton = document.querySelector('button[data-action="increment"]');
let total = 0;
subtractionButton.addEventListener('click', () => {
    total -= 1
    counterValue.innerHTML = total
})
addButton.addEventListener('click', () => {
    total += 1
    counterValue.innerHTML = total
})