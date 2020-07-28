var cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var winner;

function getRandomIntInclusive() {
    let min = 0;
    let max = 12;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function highBetCheck() {
    if (pikachuDraw < playerDraw) {
        var winner = "You win!";
    } else if (pikachuDraw > playerDraw) {
        var winner = "You lose!";
    } else if (pikachuDraw = playerDraw) {
        var winner = "Draw!";
    }

    console.log(winner);
}

function lowBetCheck() {
    if (pikachuDraw > playerDraw) {
        var winner = "You win!";
    } else if (pikachuDraw < playerDraw) {
        var winner = "You lose!";
    } else if (pikachuDraw = playerDraw) {
        var winner = "Draw!";
    }

    console.log(winner);
}

function generateButtons() {
    var highBet = document.createElement("button");
    highBet.innerHTML = "↑";

    highBet.addEventListener("click", function() {
        playerInfo.innerHTML = "Your draw: " + playerDraw;
        highBetCheck();
    });
    
    document.body.appendChild(highBet);
    

    var lowBet = document.createElement("button");
    lowBet.innerHTML = "↓";

    lowBet.addEventListener("click", function() {
        playerInfo.innerHTML = "Your draw: " + playerDraw;
        lowBetCheck();
    });

    document.body.appendChild(lowBet);

/*     var reset = document.createElement("button");
    reset.innerHTML = "Reset";

    reset.addEventListener("click", function() {
        alert("Pikachu draws a new card");
        var pikachuInfo = document.createElement("div");
        var pikachuSeed = getRandomIntInclusive();
        var pikachuDraw = cardValue[pikachuSeed];
        pikachuInfo.innerHTML = "Pikachu's draw: " + initialDraw(pikachuDraw);
    });

    document.body.appendChild(reset); */
}


var pikachuInfo = document.createElement("div");
var pikachuSeed = getRandomIntInclusive();
var pikachuDraw = cardValue[pikachuSeed];
pikachuInfo.innerHTML = "Pikachu's draw: " + pikachuDraw;

document.body.appendChild(pikachuInfo);

var playerInfo = document.createElement("div");
var playerSeed = getRandomIntInclusive();
var playerDraw = cardValue[playerSeed];

document.body.appendChild(playerInfo);

generateButtons();