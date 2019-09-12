(function(){
    let randomizer = document.querySelector("button");
    randomizer.addEventListener("click", resetColor);

    let mountains = [];

    randomizeMts();    

    function randomizeMts () {
        for(let i=0; i<7; i++){
            mountains[i] = Math.random() * 100;
            
            let id = document.querySelector("#mountain" + i)
            id.innerHTML = mountains[i].toFixed(0);
            id.style.height = ((mountains[i] * 5 + 30)+"px");
        }

        let max = Math.max(...mountains);
        let mtIndex = mountains.indexOf(max);
        let tallestMt = document.querySelector("#mountain" + mtIndex)

        tallestMt.style.background = "brown";
    }

    function resetColor () {
        for(let i=0; i<7; i++){            
            let id = document.querySelector("#mountain" + i)
            id.style.background = "forestgreen";
        }

        randomizeMts();
    }
})()