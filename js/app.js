/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const buttonStart = document.getElementById("btn__reset");
let game;

// Listen to click on Start button
// then begin the game:
buttonStart.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
})

// Listen to click on keyboard buttons:
keyboard.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.tagName === "BUTTON") {
        console.log(e.target);

        game.handleInteraction(e);
    }
})