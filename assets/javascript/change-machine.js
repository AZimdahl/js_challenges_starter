(function () {
    let changeOutput = document.querySelector("#change");
    let submitButton = document.querySelector("button");

    submitButton.addEventListener("click", getChange);
    
    function getChange() {
        let amount = document.querySelector("#amount").value;
        let twenties = 0;
        let tens = 0;
        let fives = 0;
        let ones = 0;    

        while (amount != 0) {
            if (amount % 20 == 0) {
                twenties++
                amount -= 20;
            }
            else if (amount % 10 == 0) {
                tens++
                amount -= 10;
            }
            else if (amount % 5 == 0) {
                fives++
                amount -= 5;
            }
            else {
                ones++
                amount--;
            }
        }
        let change = [twenties + " twenties", " " + tens + " tens", " " + fives + " fives", " " + ones + " ones"];
        changeOutput.innerHTML = change;
    }

    getChange();
})();