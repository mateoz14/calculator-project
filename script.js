let output = document.querySelector(".output-box")
let oneButton = document.querySelector(".one")
let equalButton = document.querySelector('.equal')
let addButton = document.querySelector('.add')
let multiplyButton = document.querySelector('.mult');
let subtactButton = document.querySelector('.sub');

let numbers = {currentNumber: "", currentAnswer: 0, chosenOperator: 0};
// i scratched the idea of making these 3 variables variables themselves,
// because they would have trouble changing through the functions, changing them
// as objects was the appropriate solution.

oneButton.addEventListener('click', () => {
    output.textContent += "1";
    numbers.currentNumber += "1";
    // adds number user clicks to the current number.
});

function addition() {
    output.textContent += " + ";
    if (numbers.currentNumber == "") {
        // do nothing so that current answer doesnt turn to NaN.
    } else {
        numbers.currentAnswer += parseInt(numbers.currentNumber)
    };
    numbers.currentNumber = "";
    // resets current number
    numbers.chosenOperator = addition;
    // makes the operator from the object switch to additon incase the equal button is hit.
};

function subtraction() {
    output.textContent += " - ";
    if (numbers.currentNumber == "" ) {
        // do nothing.
    }
    else if (numbers.currentAnswer == 0) {
        numbers.currentAnswer += parseInt(numbers.currentNumber)
        // set current answer to the current number.
    } else {
        numbers.currentAnswer = numbers.currentAnswer - parseInt(numbers.currentNumber);
    }
    numbers.currentNumber = "";
    numbers.chosenOperator = subtraction;
}

subtactButton.addEventListener('click', () => {
    subtraction();
})

addButton.addEventListener('click', () => {
    addition(); // calls for the addition function.
})

function operate(operator) {
    operator()
    output.textContent = `${numbers.currentAnswer}`
    // outputs the current answer after hitting =.
}

equalButton.addEventListener('click', () => {
   operate(numbers.chosenOperator)
})





















