var cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var pikachuDraw;
var playerDraw;

function getRandomIntInclusive() {
    let min = 0;
    let max = 12;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initialDraw() {
    let pikachuSeed = getRandomIntInclusive();
    let pikachuDraw = cardValue[pikachuSeed];
    return pikachuDraw;
}

function secondDraw() {
    let playerSeed = getRandomIntInclusive();
    let playerDraw = cardValue[playerSeed];
    return playerDraw;
}

function generateButtons() {
    var highBet = document.createElement("button");
    highBet.innerHTML = "↑";

    highBet.addEventListener("click", function() {
        alert("Betting high!");
        secondDraw();
    });
    
    document.body.appendChild(highBet);
    

    var lowBet = document.createElement("button");
    lowBet.innerHTML = "↓";

    lowBet.addEventListener("click", function() {
        alert("Betting low!");
        secondDraw();
        playerInfo.innerHTML = "Your draw: " + secondDraw(playerDraw);
    });

    document.body.appendChild(lowBet);

    var reset = document.createElement("button");
    reset.innerHTML = "Reset";

    reset.addEventListener("click", function() {
        alert("Pikachu draws a new card");
        initialDraw();
        pikachuInfo.innerHTML = "Pikachu's draw: " + initialDraw(pikachuDraw);
    });

    document.body.appendChild(reset);
}

initialDraw();

var pikachuInfo = document.createElement("div");
pikachuInfo.innerHTML = "Pikachu's draw: " + initialDraw(pikachuDraw);
document.body.appendChild(pikachuInfo);

var playerInfo = document.createElement("div");
document.body.appendChild(playerInfo);

generateButtons();