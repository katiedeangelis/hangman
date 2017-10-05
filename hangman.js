// Alien movie array
var movieList = [
    "Alien",
    "Avatar",
    "Predator",
    "District 9",
    "Dune",
    "ET",
    "Fifth Element",
    "Galaxy Quest",
    "Independence Day",
    "Close Encounter of the Third Kind",
    "Interstellar",
    "Prometheus",
    "Mars Attacks",
    "Men in Black",
    "Starship Troopers",
    "Pacific Rim",
    "Spaceballs",
    "Predator",
    "Contact",
    "War of the Worlds",
    "The Day the Earth Stood Still",
    "Star Wars",
    "The Abyss",
    "Cloverfield",
    "The Hitchhikers Guide to the Galaxy",
    "The Thing",
    "Total Recall",
    "Wall E",
    "Cocoon",
    "Invasion of the Body Snatchers",
    "Flight of the Navigator",
    "John Carter",
    "Coneheads",
    "Lilo & Stitch"

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

//As soon as the page loads show the unsolved movie that was randomly selected
window.addEventListener("load", function(event) {
    document.querySelector(".movie").innerHTML = movieUnsolved.join(" ");
});

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

            //Flag for guesses left logic
            var correctLetter = false;

            //Convert movie chosen characters to lower case for comparison
            for (var j = 0; j < movieChosen.length; j++) {
                var currentChar = movieChosen[j];
                currentChar = currentChar.toLowerCase();

                //If key pressed is in the move chosen replace the underscore with that letter
                if (keyPressed == currentChar) {
                    movieUnsolved[j] = movieChosen[j];
                    correctLetter = true;
                    document.querySelector(".movie").innerHTML = movieUnsolved.join(" ");

                    //If there are no underscores left on the screen the movie has been guessed & the user wins
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

                //If the guesses left is less than or equal to zero the movie has not been guessed & the user losses
                if (guessesLeft <= 0) {
                    document.querySelector(".guesses-left").innerHTML = "Sorry, you lose! Refresh to play again.";
                    window.removeEventListener("keyup", keyChosen);
                }
            }
        }

        document.querySelector(".movie").innerHTML = movieUnsolved.join(" ");

    //If the key pressed is already in the letter graveyard alert the user they already guessed it
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