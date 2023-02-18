const inputRef = document.querySelector('#validation-input')

const inputData = Number(inputRef.dataset.length)



function inputDatGet () {
    if (inputRef.value.length === inputData) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
}

inputRef.addEventListener('blur', inputDatGet)