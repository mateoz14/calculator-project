let output = document.querySelector(".output-box")
let oneButton = document.querySelector(".one")
let equalButton = document.querySelector('.equal')
let addButton = document.querySelector('.add')
let multiplyButton = document.querySelector('.mult');
let subtactButton = document.querySelector('.sub');

let numbers = {number1: 0, number2: 0, chosenOperator: 0};
// i scratched the idea of making these 3 variables variables themselves,
// because they would have trouble changing through the functions, changing them
// as objects was the appropriate solution.

oneButton.addEventListener('click', () => {
    output.textContent += "1";
    numbers.number2 += "1";
    // adds number user clicks to the current number.
});

function addition() {
    numbers.chosenOperator = addition;
    if (numbers.number2 == "") {
        // do nothing so that current answer doesnt turn to NaN.
    } else if ((numbers.number2 != "") && (numbers.chosenOperator != addition)) {
        numbers.chosenOperator()
    } else {
        numbers.number1 += parseInt(numbers.number2)
    };
    numbers.number2 = "";
    // resets current number
    // makes the operator from the object switch to additon incase the equal button is hit.
};

function subtraction() {
    numbers.chosenOperator = subtraction;
    if (numbers.number2 == "" ) {
        // do nothing.
    } else if ((numbers.number2 != "") && (numbers.chosenOperator != subtraction)) {
        numbers.chosenOperator()
    }
    else if (numbers.number1 == 0) {
        numbers.number1 += parseInt(numbers.number2)
        // set current answer to the current number.
    }  else {
        numbers.number1 = numbers.number1 - parseInt(numbers.number2);
    }
    numbers.number2 = "";
}

subtactButton.addEventListener('click', () => {
    output.textContent += ' - ';
    subtraction();
})

addButton.addEventListener('click', () => {
    output.textContent += ' + ';
    addition(); // calls for the addition function.
})

function operate(operator) {
    operator()
    output.textContent = `${numbers.number1}`
    // outputs the current answer after hitting =.
}

equalButton.addEventListener('click', () => {
   operate(numbers.chosenOperator)
})





















