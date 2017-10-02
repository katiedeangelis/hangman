//AFIs 100 Greatest American Movies

//Use key events to listen for the letters that your players will type.
//Display the following on the page:
//Press any key to get started!
//Wins: (# of times user guessed the word correctly).


//If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
//As the user guesses the correct letters, reveal them: m a d o _  _ a.


//Number of Guesses Remaining: (# of guesses remaining for the user).
//Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
//After the user wins/loses the game should automatically choose another word and make the user play it.

// Player opens hangman page
// Screen reads "press any key to start"
// Player presses a key, game starts
// A movie is randomly choosen from the movie array
var movieList = [
    "Alien",
    "Avatar",
    "Blade Runner",
    "District 9",
    "Dune",
    "ET",
    "Fifth Element",
    "Galaxy Quest",
    "Gattica",
    "Inception",
    "Interstellar",
    "Mad Max",
    "Mars Attacks",
    "Men in Black",
    "Minority Report",
    "Pacific Rim",
    "Planet of the Apes",
    "Predator",
    "Robocop",
    "Serenity",
    "Signs",
    "Star Wars",
    "The Fly",
    "The Matrix",
    "The Terminator",
    "The Thing",
    "Total Recall",
    "Wall E"
]

//Randomly choose an alien movie
var movieChosen = movieList[Math.floor(Math.random() * movieList.length)];

//Take the randomly chosen movie string and split it into an array
movieChosen = movieChosen.split("");

//Copy the movie chosen array into the movie unsolved array
var movieUnsolved = movieChosen.slice();

//Create a letter grave yard array where incorrect guesses will be pushed
var letterGraveYard = [];

//Define that the user gets 10 incorrect guesses
var guessesLeft = 10;

//Loop through the movie unsolved array and if the character is not a space replace it with an underscore
for (var j = 0; j < movieUnsolved.length; j++) {
    if (movieUnsolved[j] != " ") {
        movieUnsolved[j] = "_";
        //if the character is a space assign it the following HTML (defined in hangman.css)
    } else {
        movieUnsolved[j] = "<span class='title-spaces'></span>";
    }
}

//As soon as the window opens listen for a keyup event
window.addEventListener("keyup", keyChosen);

//Assign the key the user pressed to the variable keyPressed and interpret it as lower case
function keyChosen(e) {
    var keyPressed = e.key;
    keyPressed = keyPressed.toLowerCase();

    // If the key pressed is not in the letter graveyard add it
    if (letterGraveYard.indexOf(keyPressed) === -1) {
        letterGraveYard.push(keyPressed);
        document.querySelector(".letter-graveyard").innerHTML = letterGraveYard.join(", ");

        //If the key pressed isn't in the graveyard and the guesses left is greater than zero run the loop
        if (guessesLeft > 0) {

            //Run through the movie chosen and turn the characters to lower case for comparison
            var correctLetter = false;
            for (var j = 0; j < movieChosen.length; j++) {
                var currentChar = movieChosen[j];
                currentChar = currentChar.toLowerCase();

                //If key pressed is in the move title replace the underscore with that letter
                if (keyPressed == currentChar) {
                    movieUnsolved[j] = movieChosen[j];
                    correctLetter = true;
                    document.querySelector(".movie").innerHTML = movieUnsolved.join(" ");
                    if (movieUnsolved.indexOf("_") === -1) {
                        document.querySelector(".guesses-left").innerHTML = "You win! Refresh to play again.";
                        window.removeEventListener("keyup", keyChosen);
                    }
                }
            }

            //If key pressed is not in the movie title deduct a guess from the guesses left
            if (correctLetter === false) {
                guessesLeft -= 1;
                document.querySelector(".guesses-left").innerHTML = guessesLeft;
                //If the guesses left is less than zero say sorry you lose
                if (guessesLeft <= 0) {
                    document.querySelector(".guesses-left").innerHTML = "Sorry, you lose! Refresh to play again.";
                    window.removeEventListener("keyup", keyChosen);
                }
            }
        }

        document.querySelector(".movie").innerHTML = movieUnsolved.join(" ");

    } else {
        alert("You already guessed that!");
        return false;
    }
}
//6. If the letter is correct it is revealed
//7. If the letter is incorrect the number of guesses integer decreases by one
//8. Letters that have been guessesd (whether correct or incorrect) appear as guessed letters at the bottom of the screen
//9. If the user solves the movie before their guesses reach 0 then the player wins
//10. If the user doesn't solve the movie and their guesses reach 0 then th player looses
//11. The player should be prompted to play again if they win or lose