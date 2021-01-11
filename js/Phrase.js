/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Global variables:
const phraseUL = document.querySelector("#phrase ul");

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    get phraseArray() {
        return this.phrase.split("");
    }

    // Adds a placeholder for each letter:
    addPhraseToDisplay() {
        this.phraseArray.forEach(phraseChar => {
            const li = document.createElement("li");

            if (phraseChar === " ") {
                console.log(phraseChar);
                li.className = "space";
                li.textContent = " ";
                phraseUL.appendChild(li);
            } else {
                console.log(phraseChar);
                li.className = `hide letter ${phraseChar}`;
                li.textContent = phraseChar;
                phraseUL.appendChild(li);
            }
        })
    }

    // Checks if the selected letter is a match:
    checkLetter(inputLetter) {
        const lowerInput = inputLetter.toLowerCase();
        return this.phraseArray.includes(lowerInput);
    }

    // Reveals the letters when they are a match:
    showMatchedLetter(inputLetter) {
        const lowerInput = inputLetter.toLowerCase();
        const matchingLetters = document.querySelectorAll(`#phrase li.letter.${lowerInput}`);

        matchingLetters.forEach(letter => {
            letter.classList.remove("hide");
            letter.classList.add("show");
        })
    }
}