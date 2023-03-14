let randomNumber1 = parseInt((Math.random() * 6) + 1);

let randomDiceImage = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomDiceImage);


let randomNumber2 = parseInt((Math.random() * 6) + 1);

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomDiceImage2);


if(randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
else if (randomNumber1 == randomNumber2)
    document.querySelector("h1").textContent = "Draw!";
else
    document.querySelector("h1").textContent = "Player 2 Wins🚩";