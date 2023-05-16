var randomNumber = document.getElementById("Number");
var usertext = document.getElementById("text");
var resulttext = document.getElementById("result");
var button = document.getElementById("butt");
var prize = document.getElementById("prize");
var timeLeft = 10;
var myVar;
var prizes = [466198128295593n, 246307395742768n, 526077435676161n, 839523253056384n, 972963667540766n, 
    542561105619819n, 429650249077582n, 867699378770864n, 135485479178027n, 
    818543213297445n, 809143933497039n, 563609884201640n, 481764393532659n, 806199801620902n, 
    234009437999734n, 877175946599282n, 513223536439749n, 616673641228681n, 609792841983735n];



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