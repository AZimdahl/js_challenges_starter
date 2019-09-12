(function () {
    let coin = document.querySelector(".coin");
    let coinFlipStyle = document.documentElement;

    coin.addEventListener("click", flipCoin);

    function flipCoin() {
        let coinVal = Math.random();

        if (coinVal >= 0.5) {
            coinFlipStyle.style.setProperty('--flip-degree', '720deg');
        }
        else {
            coinFlipStyle.style.setProperty('--flip-degree', '900deg');
        }
        
        coin.classList.toggle('is-flipped');
    }
})();