//set up computer answers
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//start with 0
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//computer guesses from the choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//player gets 9 guesses
var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function () {
    // player guesses displayed
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// default reset function
var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//player's guess on key hit
document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("You win! You are psychic.");
            reset();
        }
    } else if (guessesLeft == 0) {
        // lose and updates html
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("You lose, better luck next time!");
        // reset at end
        reset();
    }
};