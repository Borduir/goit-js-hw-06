'use strict'
const categoriesList = document.querySelectorAll('.item h2');

console.log(`Number of categories: ${categoriesList.length}`)
    
for (const category of categoriesList) {
    console.log(`Category: ${category.textContent}`)
    console.log(`Elements: ${category.nextElementSibling.children.length}`)
}