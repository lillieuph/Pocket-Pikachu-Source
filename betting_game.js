const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const humanValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
var winner;

function getRandomIntInclusive() {
    let min = 0;
    let max = 12;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* The following two functions are used to determine the game result based on player choice of high 
 or low bet. Different images and text are displayed for the different outcomes. 
 */

function highBetCheck() {
    var edit_img = document.getElementById("windisplay");

    if (pikachuDraw < playerDraw) {
        edit_img.style.backgroundImage = 'url("img/pikahappy.gif")';
        var winner = "You win!";
    } else if (pikachuDraw > playerDraw) {
        edit_img.style.backgroundImage = 'url("img/sadpika.gif")';
        var winner = "You lose!";
    } else if (pikachuDraw = playerDraw) {
        edit_img.style.backgroundImage = 'url("img/drawpika.png")';
        var winner = "Draw!";
    }

    winDisplay.innerHTML = winner;
}

function lowBetCheck() {
    var edit_img = document.getElementById("windisplay");

    if (pikachuDraw > playerDraw) {
        edit_img.style.backgroundImage = 'url("img/pikahappy.gif")';
        var winner = "You win!";
    } else if (pikachuDraw < playerDraw) {
        edit_img.style.backgroundImage = 'url("img/sadpika.gif")';
        var winner = "You lose!";
    } else if (pikachuDraw = playerDraw) {
        edit_img.style.backgroundImage = 'url("img/drawpika.png")';
        var winner = "Draw!";
    }

    winDisplay.innerHTML = winner;
}

//Creates the buttons that make the magic happen O_O
function generateButtons() {
    var highBet = document.createElement("button");
    highBet.innerHTML = "↑";
    highBet.setAttribute("class", "center");
    highBet.setAttribute("id", "buttons");

    highBet.addEventListener("click", function() {
        playerInfo.innerHTML = "Your draw: " + playerDrawHmn;
        playerInfo.setAttribute("id", "playinfo");
        highBetCheck();
    });
    
    document.body.appendChild(highBet);
    

    var lowBet = document.createElement("button");
    lowBet.innerHTML = "↓";
    lowBet.setAttribute("class", "center");
    lowBet.setAttribute("id", "buttons");

    lowBet.addEventListener("click", function() {
        playerInfo.innerHTML = "Your draw: " + playerDrawHmn;
        playerInfo.setAttribute("id", "playinfo");
        lowBetCheck();
    });

    document.body.appendChild(lowBet);

    var reset = document.createElement("button");
    reset.innerHTML = "Reset";
    reset.setAttribute("class", "center");
    reset.setAttribute("id", "buttons");

    reset.addEventListener("click", function() {
        window.location.reload();
    });

    document.body.appendChild(reset);
}

//Creates div for win condition display and displays initial picture at game start
var winDisplay = document.createElement("div");
winDisplay.setAttribute("id", "windisplay");
winDisplay.setAttribute("class", "pikaheader");
document.body.appendChild(winDisplay);

//Creates div for Pikachu's card draw, auto draws and then displays said draw
var pikachuInfo = document.createElement("div");
pikachuInfo.setAttribute("id", "pikainfo");
var pikachuSeed = getRandomIntInclusive();
var pikachuDraw = cardValue[pikachuSeed];
var pikachuDrawHmn = humanValue[pikachuSeed];
pikachuInfo.innerHTML = "Pikachu's draw: " + pikachuDrawHmn;
document.body.appendChild(pikachuInfo);

//Creates div to display player's draw after betting
var playerInfo = document.createElement("div");
var playerSeed = getRandomIntInclusive();
var playerDraw = cardValue[playerSeed];
var playerDrawHmn = humanValue[playerSeed];
document.body.appendChild(playerInfo);

generateButtons();