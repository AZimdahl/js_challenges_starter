(function(){
    let flipButton = document.querySelector("button");
    flipButton.addEventListener("click", flipCoin);

    function flipCoin() {
        let coinVal = Math.random();
        console.log(coinVal);
        if (coinVal >= 0.5)
        {
            console.log("heads");
        }
        else {
            console.log("tails");
        }
    }
})();