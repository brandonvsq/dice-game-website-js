// generate random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// assign random number to dice image
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// determines which player is the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<span id='spanOne'>Player One</span> Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "<span id='spanTwo'>Player Two</span> Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}