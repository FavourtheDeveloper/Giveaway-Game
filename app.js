var randomNumber = document.getElementById("Number");
var usertext = document.getElementById("text");
var resulttext = document.getElementById("result");
var button = document.getElementById("butt");
var prize = document.getElementById("prize");
var timeLeft = 10;
var myVar;
var prizes = [46619812829559333n, 24630597395742768n, 52396077435676161n, 85239523253056384n, 97296366757240766n, 
    54239561105619819n, 42965024907770582n, 86769937877024864n, 13548547917768027n, 
    81859243213297445n, 80918043933497039n, 56503609884201640n, 48861764393532659n, 80156199801620902n, 
    23400943790499734n, 87717594156599282n, 51322353643979749n, 61667364134228681n, 60979284198123735n];



function timer() {
    
    if (timeLeft == 0) {
        clearTimeout(myVar);
        document.getElementById("count").innerHTML = "";
        win();
      } else {
        document.getElementById("count").innerHTML = timeLeft;
        timeLeft--;
      }
    
}

alert("Pls, this game is not for Duade😂😂😂😂😂, before the Werey carry all my Giveaway Airtime go");
var getptom = prompt("Enter your Name");
let namee = getptom;
document.getElementById("promtname").innerHTML = "Hi " + namee + " 🥺🥺🥺";

function guess() {
    
    var randomDigits = Math.round(Math.random() * 25);
        randomNumber.innerHTML = randomDigits;
    if (usertext.value == "") {
        alert("Please Enter a Guess Number");
    } else if (usertext.value > 25) {
        alert("Please enter a number not greater than  25");
        randomNumber.innerHTML = "";
    } else
    {
        
        if (usertext.value == randomNumber.innerHTML) {
            alert("You Guessed Right, Wait until the page loads to claim your Airtime");
            document.getElementById("game").style.display = "none";
            myVar = setInterval(timer, 1000);
        }
       
    }

    usertext.value = "";
}


function win() {
    var randArr = Math.round(Math.random() * 18);
    resulttext.style.display = "block";
    resulttext.innerHTML = "Congrats " + namee + "!!! You guessed right. Here's your Airtime below."
    prize.innerHTML = prizes[randArr];
    console.log(prizes);
    
    
}



usertext.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        guess();
    }
});