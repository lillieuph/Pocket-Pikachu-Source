function generateButtons() {
    var highBet = document.createElement("button");
    highBet.innerHTML = "↑";

    highBet.addEventListener("click", function() {
        alert("Betting high!");
    });

    document.body.appendChild(highBet);

    var lowBet = document.createElement("button");
    lowBet.innerHTML = "↓";

    lowBet.addEventListener("click", function() {
        alert("Betting low!");
    });

    document.body.appendChild(lowBet);
}

generateButtons();