let output = document.querySelector(".output-box")
let oneButton = document.querySelector(".one")
let equalButton = document.querySelector('.equal')
let plusButton = document.querySelector('.plus')

let currentNumber = ""
let currentAnswer = 0
// ^ holds a variable for the current answer inside of the calculator so
// we can use multiple numbers.

oneButton.addEventListener('click', () => {
    output.textContent += "1";
    currentNumber += "1";
    // adds number user clicks to the current number.
});

plusButton.addEventListener('click', () => {
    output.textContent += " + ";
    currentAnswer += +currentNumber;
    // sets the current answer to equal the currentNumber
    currentNumber = "";
    // resets the current number
})

equalButton.addEventListener('click', () => {
    currentAnswer += +currentNumber;
    // currentAnswer will display x + y.
    output.textContent = `${currentAnswer}`;
    currentAnswer = 0;
    currentNumber = "";
    // resets all.
})