const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
let newList = []
ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li')
  ingredientsItem.textContent = ingredient
  ingredientsItem.classList.add('item')
  newList.push(ingredientsItem)
  })

ingredientsList.append(...newList)

console.log(ingredientsList)

