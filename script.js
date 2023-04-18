let output = document.querySelector(".output-box")
let oneButton = document.querySelector(".one")

function numberOutput(number) {
    output.textContent += number;
};

oneButton.addEventListener('click', numberOutput("1"));
