// Global variables:
const buttonStart = document.getElementById("btn__reset");
const keys = document.querySelectorAll(".key");

let game;

// Listen to click on Start button
// then begin the game:
buttonStart.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
})

// Listen to click on keyboard buttons:
keyboard.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target);
    }
})

// Listen to physical keyboard events:
document.addEventListener("keydown", (e) => {
    let pressedKey;

    keys.forEach(key => {
        if(key.textContent === e.key) {
            pressedKey = key;
        }
    })

    game.handleInteraction(pressedKey);
});