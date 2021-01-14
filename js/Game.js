// Global variables:
const gameOverlay = document.getElementById("overlay");
const overlayH1 = document.getElementById("game-over-message");
const keyboard = document.getElementById("qwerty");

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            new Phrase('First phrase is blue'),
            new Phrase('Second phrase is light blue'),
            new Phrase('Third phrase is dark blue'),
            new Phrase('Fourth phrase is pink'),
            new Phrase('Last phrase is purple')
        ],
        this.activePhrase = null
    }

    // Iniates the game:
    startGame() {
        // Remove overlay
        gameOverlay.style.display = "none";

        // Choose and display a phrase:
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    // Randomly choses a phrase and returns it:
    getRandomPhrase() {
        const phraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseIndex];
    };

    // Adds logic to user interaction:
    handleInteraction(key) {
        const chosenLetter = key.textContent;
        const isMatch = this.activePhrase.phrase.includes(chosenLetter);
        const repeatedKey = 
        key.classList.contains("chosen") ||
        key.classList.contains("wrong") ?
        true : false;

        // Disables the selected letter’s onscreen keyboard
        // only handles interaction if key was not called before:
        if (!repeatedKey) {
            if (!isMatch) {
                // Handles wrong matches:
                key.classList.add("wrong");
                this.removeLife();
            } else {
                // Handles the correct matches:
                key.classList.add("chosen");
                this.activePhrase.showMatchedLetter(chosenLetter);
    
                if (this.checkForWin()) {
                    this.gameOver();
                }
            }
        }
    };

    // Removes one life:
    removeLife() {
        const hearts = document.querySelectorAll(".tries img[src='images/liveHeart.png']");
        const lastHeart = hearts[hearts.length - 1];

        lastHeart.src = "images/lostHeart.png";
        hearts.length === 1 ? "" : lastHeart.classList.add("heart-pump");
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver();
        }
    };

    // Checks if the user has guessed the phrase:
    checkForWin() {
        const phraseLetters = document.querySelectorAll(".letter");
        const revealedLetters = document.querySelectorAll(".show");
        const revealedAll = phraseLetters.length === revealedLetters.length ? true : false;

        return revealedAll;
    };

    // Finishes the game:
    gameOver() {
        const isWinner = this.checkForWin();

        gameOverlay.style.display = "flex";

        if (isWinner) {
            overlayH1.textContent = "YOU ARE A WINNER!!!";
            gameOverlay.className = "win";
            this.resetGame();
        } else {
            overlayH1.textContent = "You lose. =(";
            gameOverlay.className = "lose";
            this.resetGame();
        }
    };

    resetGame() {
        // Empty previous letters and pressed keys:
        // Restore all hearts:
        phraseUL.innerHTML = "";
        document.querySelectorAll(".key").forEach(key => {
            key.classList.remove("chosen");
            key.classList.remove("wrong");
        })
        document.querySelectorAll(".tries img").forEach(heart => {
            heart.src = "images/liveHeart.png";
            heart.classList.remove("heart-pump");
        })
    };
}