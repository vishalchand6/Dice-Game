var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImages1 = "./images/dice" + randomNumber1 + ".png"

document.querySelector("img").setAttribute("src", randomImages1);

var randomImages2 = "./images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇Player1 Wins"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins🥇"
}

else {
    document.querySelector("h1").innerHTML = "Draw"
}

