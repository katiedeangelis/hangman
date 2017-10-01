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
var movieList = ["Citizen Kane", "The Godfather", "Casablanca", "Raging Bull", "Singin in the Rain", "Gone with the Wind", "Lawrence of Arabia", "Schindlers List", "Vertigo", "The Wizard of Oz", "City Lights", "The Searcher", "Star Wars", "Psycho", "Sunset Blvd", "The Graduate", "The General"]
var movieChosen = movieList[Math.floor(Math.random() * movieList.length)];
console.log(movieChosen);

// User presses keys to guess letters
var guessesLeft = 10;

window.addEventListener("keyup", keyChosen);

function keyChosen(e) {
    var key = e.key;
    guessesLeft = guessesLeft - 1;
    //guessesLeft -= 1 (shorthand)
}
//6. If the letter is correct it is revealed
//7. If the letter is incorrect the number of guesses integer decreases by one
//8. Letters that have been guessesd (whether correct or incorrect) appear as guessed letters at the bottom of the screen
//9. If the user solves the movie before their guesses reach 0 then the player wins
//10. If the user doesn't solve the movie and their guesses reach 0 then th player looses
//11. The player should be prompted to play again if they win or lose