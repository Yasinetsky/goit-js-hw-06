const numberOfCategories = document.querySelectorAll("li.item");
console.log('Number of categories :', numberOfCategories.length);

const firstCategory = numberOfCategories[0].querySelector("h2")
console.log('Category:', firstCategory.textContent)

const firstCategoryElements = numberOfCategories[0].querySelectorAll("li")
console.log('Elements:', firstCategoryElements.length)

const secondCategory = numberOfCategories[1].querySelector("h2")
console.log('Category:', secondCategory.textContent)

const secondCategoryElements = numberOfCategories[1].querySelectorAll("li")
console.log('Elements:', secondCategoryElements.length)

const lastsecondCategory = numberOfCategories[2].querySelector("h2")
console.log('Category:', lastsecondCategory.textContent)

const lastCategoryElements = numberOfCategories[2].querySelectorAll("li")
console.log('Elements:', lastCategoryElements.length)

