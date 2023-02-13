const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrListHead = document.querySelector("#ingredients");

const ingredList = ingredients.map(element =>{

  const ingrItem = document.createElement("li");
  ingrItem.textContent = element;
  ingrItem.classList.add("item");
  return ingrItem;

});
ingrListHead.append(...ingredList);