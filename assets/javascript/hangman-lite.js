(function(){
    let word = "hangman";
    let letter = "";

    addEventListener("keyup", checkWord);

    //source = https://stackoverflow.com/questions/27194359/javascript-pluralize-a-string
    //Used to pluralize the word "time" based on the number of occurences in letterCount
    const maybePluralize = (count, noun, suffix = 's') => 
    `${count} ${noun}${count !== 1 ? suffix : ''}`;

    function checkWord (event) {
        letter = event.key;
        let letterCount = 0;
        let letterIndex = word.indexOf(letter);

        while (letterIndex !== -1)
        {
            letterCount++;
            letterIndex = word.indexOf(letter, letterIndex + 1);
        }

        if (word.indexOf(letter) >= 0){
            alert("Yeah, the letter " + letter + " exists " + maybePluralize(letterCount, "time") + " in my word")
        }
        else {
            alert("Nope, that letter doesn't exist in my word.")
        }
    }
})();