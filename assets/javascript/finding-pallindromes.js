(function(){
    let runButton = document.querySelector("button");

    runButton.addEventListener("click", wordCheck);

    function wordCheck() {
        let word = document.querySelector("#word").value;
        
        //source: https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
        let splitString = word.split("");
        let reverseArray = splitString.reverse();
        let reverseWord = reverseArray.join("");
        if (word == reverseWord){
            console.log(true);
            alert("Congratulations! You found a pallindrome! Try another word.")
        }
        else {
            console.log(false)
            alert("Sorry, that word is not a pallindrome. Try another word.")
        }
    }


})();