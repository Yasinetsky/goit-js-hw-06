const fontControl = document.querySelector("input#font-size-control")

const spanText = document.querySelector('span#text')



function fontSizeSet () {

    spanText.style.fontSize = fontControl.value + 'px';
   
}

fontControl.addEventListener('input', fontSizeSet)