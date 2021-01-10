/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Adds a placeholder for each letter:
    addPhraseToDisplay() {
        const phraseArray = this.phrase.split("");
        const phraseUL = document.querySelector("#phrase ul");
        console.log(phraseArray);
        console.log(phraseUL);

        phraseArray.forEach(phraseChar => {
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
    checkLetter() {

    }

    // Reveals the letters when they are a match:
    showMatchedLetter() {

    }
}