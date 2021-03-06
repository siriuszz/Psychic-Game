// Create an array that lists out all of the options in the alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables to hold the number of wins, losses, and remaining guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;


// Randomly choose a letter from the options array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determine which key was pressed.
    var userGuess = event.key;

    // Determine wins and count down guesses left
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        return
    } else {
        guessesLeft--
    }

    // Determine losses and reset guesses left
    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
    }


    // A loop to track user guesses
    var letters = "";


    for (i = 9; i > 0; i--) {
        letters = userGuess;
    }

    // Create a variable to hold new HTML
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + letters[i] + "</p>";


    // Set the inner HTML contents of the #game div to our html string
    // I realize that innerHTML overwrites, which is why my user guesses aren't holding.
    //But I've run out of time to figure out the right way. 
    document.querySelector("#game").innerHTML = html;
}