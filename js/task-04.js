const incrementBtn = document.querySelector('[data-action = "increment"]')
const decrementBtn = document.querySelector('[data-action = "decrement"]')
const dataValue = document.querySelector('#value');
let counterValue = 0;

const incrementData = () => {
    counterValue += 1;
    dataValue.textContent = counterValue;
};

incrementBtn.addEventListener('click', ( incrementData) );

const decrementData = () => {
    counterValue -= 1;
    dataValue.textContent = counterValue;
};

decrementBtn.addEventListener('click', ( decrementData) );