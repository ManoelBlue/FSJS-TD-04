/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Global variables:
const gameOverlay = document.getElementById("overlay");
const keyboard = document.getElementById("qwerty");

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            'First phrase is blue',
            'Second phrase is light blue',
            'Third phrase is dark blue',
            'Fourth phrase is pink',
            'Last phrase is purple'
        ],
        this.activePhrase = null
    }

    // Iniates the game:
    startGame() {
        gameOverlay.style.display = "none";
        const chosenPhrase = this.getRandomPhrase();
        this.activePhrase = chosenPhrase;
        this.activePhrase.addPhraseToDisplay();
    };

    // Randomly choses a phrase and returns it:
    getRandomPhrase() {
        const phraseIndex = Math.floor(Math.random() * (this.phrases.length + 1));
        return this.phrases[phraseIndex];
    };

    // Adds logic to user interaction:
    handleInteraction() {
        const clickedKey = e.target;
        const chosenLetter = clickedKey.textContent;
        const phraseArray = this.activePhrase.split("");
        const isMatch = phraseArray.includes(chosenLetter);

        // Disables the selected letter’s onscreen keyboard


        if (!isMatch) {
            // Handles wrong matches:
            clickedKey.classList.add("wrong");
            this.removeLife();
        } else {
            // Handles the correct matches:
            const isWinner = this.checkForWin();
            clickedKey.classList.add("chosen");
            this.activePhrase.showMatchedLetter();

            if (isWinner) {
                this.gameOver();
            }
        }

    };

    // Removes one life:
    removeLife() {

    };

    // Checks if the user has guessed the phrase:
    checkForWin() {

    };

    // Finishes the game:
    gameOver() {

    };
}