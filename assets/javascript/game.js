// Create an array that lists out all of the options in the alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables to hold the number of wins, losses, and remaining guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determine which key was pressed.
    var userGuess = event.key;

    // Randomly choose a letter from the options array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Determine wins and count down guesses left
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
    } else {
        guessesLeft--
    }

    // Determine losses and reset guesses left
    if (guessesLeft < 0) {
        guessesLeft = 9;
        losses++;
    }


    // A loop to track user guesses
    var letters = ""
    var i;


    for (i = 10; i > 0; i--) {
        letters = userGuess;
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + letters +  "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}

