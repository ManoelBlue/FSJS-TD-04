/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Global variables:
const gameOverlay = document.getElementById("overlay");
const overlayH1 = document.getElementById("game-over-message");
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
        const phraseIndex = Math.floor(Math.random() * this.phrases.length);
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
        const hearts = document.querySelectorAll(".tries");
        const lastHeart = hearts[hearts.length - 1];

        lastHeart.src = "images/lostHeart.png";
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver();
        }
    };

    // Checks if the user has guessed the phrase:
    checkForWin() {
        const phraseLetters = document.querySelectorAll(".letter");
        const lettersArray = Array.prototype.slice.call(phraseLetters);
        const revealedAll = lettersArray.every(letter => letter.className.contains("show"));

        return revealedAll;
    };

    // Finishes the game:
    gameOver() {
        const isWinner = this.checkForWin();

        gameOverlay.style.display = "flex";

        if (isWinner) {
            overlayH1.textContent = "YOU ARE A WINNER!!!";
            gameOverlay.className = "win";
        } else {
            overlayH1.textContent = "You lose. =(";
            gameOverlay.className = "lose";
        }
    };
}