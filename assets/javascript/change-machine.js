(function(){
    let amount = 103;
    let twenties = 0;
    let tens = 0;
    let fives = 0;
    let ones = 0;

    while (amount != 0)
    {
        if (amount%20 == 0) {
            twenties++
            amount -= 20;
        }
        else if (amount%10 == 0)
        {
            tens++
            amount -= 10;
        }
        else if (amount%5 == 0)
        {
            fives++
            amount -= 5;
        }
        else
        {
            ones++
            amount--;
        }
    }

    let change = [twenties + " twenties", tens + " tens", fives + " fives", ones + " ones"];   
    
    console.log(amount, change);
})();