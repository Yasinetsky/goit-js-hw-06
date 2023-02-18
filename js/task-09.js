function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonChangeColorRefs = document.querySelector("button.change-color");
const spanRefs = document.querySelector('span.color')


function changeColorBody () {
  spanRefs.textContent = getRandomHexColor()
  document.body.style.backgroundColor = getRandomHexColor()
}

buttonChangeColorRefs.addEventListener('click', changeColorBody)