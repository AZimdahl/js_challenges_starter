(function(){
let startingPopulation;
let birthRate;
let numberOfWeeks;
let breedButton = document.querySelector("button");
let result = document.querySelector("#result");

breedButton.addEventListener("click", breed);

function breed() {
    getParameters();

    for (let weeks = 1; weeks <= numberOfWeeks; weeks++){
        startingPopulation = startingPopulation + (startingPopulation*birthRate);
    }
    startingPopulation = parseInt(startingPopulation);
    result.innerHTML = "There will be " + startingPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks"
}

function getParameters() {
    startingPopulation = document.querySelector("#startingPopulation").value;
    birthRate = document.querySelector("#birthRate").value;
    numberOfWeeks = document.querySelector("#numberOfWeeks").value;

    startingPopulation = parseInt(startingPopulation);
    birthRate = parseFloat(birthRate)/100;
    numberOfWeeks = parseInt(numberOfWeeks);
}
})();