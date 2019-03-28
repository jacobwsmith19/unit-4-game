
// GLOBAL VARIABLES --------------------------------------------------------------

var wins = 0;
var losses = 0;
var score = 0;
var randomNumber = 0;
var crystalValues = [0,0,0,0];
var buttonName;


// FUNCTIONS ---------------------------------------------------------------------

// generates random number
function generateRandomNumber() {
    var min = 19;
    var max = 120;
    randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    $("#randomNumber").text(randomNumber);
}

// generates random values for the crystal buttons and stores them in the crystalValues array
function generateRandomCrystals() {
    for (var i = 0; i < crystalValues.length; i++) {
        var min = 1;
        var max = 12;
        crystalValues[i] = Math.floor(Math.random() * (max - min + 1)) + min;
};
}

// resets user score to zero and populates scoreNumber div on the html page
function resetUserScore() {
    score = 0;
    $("#scoreNumber").text(score);
}

// starts the game when user clicks a crystal button, adds button value to score, updates wins/losses
function startGame() {
    $("#messageBox").text("Keep selecting crystals!");

    if (buttonName === "crystalButton1") {
        score = score + crystalValues[0];
        $("#scoreNumber").text(score);
    }

    if (buttonName === "crystalButton2") {
        score = score + crystalValues[1];
        $("#scoreNumber").text(score);
    }

    if (buttonName === "crystalButton3") {
        score = score + crystalValues[2];
        $("#scoreNumber").text(score);
    }

    if (buttonName === "crystalButton4") {
        score = score + crystalValues[3];
        $("#scoreNumber").text(score);
    }

    if (score > randomNumber) {
        $("#messageBox").text("You lose-- practice arithmetic.");
        losses++;
        $("#lossesNumber").text(losses);
        generateRandomNumber();
        generateRandomCrystals();
        resetUserScore();
    }

    if (score === randomNumber) {
        $("#messageBox").text("You win, Einstein!");
        wins++;
        $("#winsNumber").text(wins);
        generateRandomNumber();
        generateRandomCrystals();
        resetUserScore();
    }
}

// START GAME -----------------------------------------------------------------------

generateRandomNumber();
generateRandomCrystals();
resetUserScore();

$(".btn").click(function() {
    buttonName = this.id;
    startGame();
});