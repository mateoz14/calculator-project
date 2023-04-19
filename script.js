let output = document.querySelector(".output-box")
let oneButton = document.querySelector(".one")
let equalButton = document.querySelector('.equal')
let plusButton = document.querySelector('.plus')

let currentNumber = ""
let nextNumber = ""
let whichNumber = 0


oneButton.addEventListener('click', () => {
    output.textContent += "1";
});

plusButton.addEventListener('click', () => {
    currentNumber = +output.textContent
    output.textContent = ""
});

equalButton.addEventListener('click', () => {
    nextNumber = +output.textContent
    output.textContent = `${currentNumber + nextNumber}`
}); // this works but only if there are two numbers put in