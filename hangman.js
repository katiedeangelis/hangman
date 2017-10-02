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

var movieChosen = movieList[Math.floor(Math.random() * movieList.length)];
movieChosen = movieChosen.split("");
console.log(movieChosen);
var movieUnsolved = movieChosen.slice();
var letterGraveYard = [];

for (var j = 0; j < movieUnsolved.length; j++) {
    if (movieUnsolved[j] != " ") {
        movieUnsolved[j] = "_";
    } else {
        movieUnsolved[j] = "<span class='title-spaces'></span>";
    }
}
console.log(movieUnsolved);

// User presses keys to guess letters
var guessesLeft = 10;

window.addEventListener("keyup", keyChosen);

function keyChosen(e) {
    var keyPressed = e.key;
    keyPressed = keyPressed.toLowerCase();
    //guessesLeft -= 1 (shorthand)

    // If the key pressed is not in the letter graveyard add it
    if (letterGraveYard.indexOf(keyPressed) === -1) {
        letterGraveYard.push(keyPressed);
        document.querySelector(".letter-graveyard").innerHTML = letterGraveYard.join(", ");

        //If the guesses left is less than zero say sorry you lose
        if (guessesLeft < 0) {
            document.querySelector(".guesses-left").innerHTML = "Sorry, you lose!";


        } else { //Else show the number of guesses the user has left

            //Run through the movie chosen and turn the characters to lower case for comparison
            for (var j = 0; j < movieChosen.length; j++) {
                var currentChar = movieChosen[j];
                currentChar = currentChar.toLowerCase();

                //If key pressed is in the move title replace the underscore with that letter
                if (keyPressed == currentChar) {
                    movieUnsolved[j] = movieChosen[j];
                }
            }
        }
        document.querySelector(".movie").innerHTML = movieUnsolved.join(" ");
        //If key pressed is not in the movie title deduct a guess from the guesses left
        if (movieChosen.indexOf(keyPressed) === -1) {
            guessesLeft = guessesLeft - 1;
        }
        document.querySelector(".guesses-left").innerHTML = guessesLeft;

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