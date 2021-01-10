/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game;
const buttonStart = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");

// Listen to click on Start button
// then begin the game:
buttonStart.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
})

// Listen to click on keyboard buttons:
keyboard.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(e.target);

        game.handleInteraction();
    }
})