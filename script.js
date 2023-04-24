let output = document.querySelector(".output-box")
let oneButton = document.querySelector(".one")
let equalButton = document.querySelector('.equal')
let addButton = document.querySelector('.add')
let multiply = document.querySelector('.mult');

let currentNumber = "";
let numbers = {currentNumber: "", currentAnswer: 0, chosenOperator: 0};
// ^ holds a variable for the current answer inside of the calculator so
// we can use multiple numbers.

oneButton.addEventListener('click', () => {
    output.textContent += "1";
    numbers.currentNumber += "1";
    // adds number user clicks to the current number.
});

function addition() {
    output.textContent += " + ";
    if (numbers.currentNumber == "") {
        // do nothing
    } else {
        numbers.currentAnswer += parseInt(numbers.currentNumber)
    };
    numbers.currentNumber = "";
    numbers.chosenOperator = addition;
};

addButton.addEventListener('click', () => {
    addition();
})

function operate(operator) {
    operator()
    output.textContent = `${numbers.currentAnswer}`
}

equalButton.addEventListener('click', () => {
   operate(numbers.chosenOperator)
   
})





















