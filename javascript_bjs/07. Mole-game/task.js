const dead = document.querySelector("#dead");
const lost = document.querySelector("#lost");
const holes = document.querySelectorAll(".hole");

let bumpedMole = 0;
let bumpMissed = 0;

const win = 10;
const lose = 5;

function newGame() {
    bumpedMole = 0;
    bumpMissed = 0;
    dead.textContent = 0;
    lost.textContent = 0;
}

function getHole() {
    for (let i = 0; i < holes.length; i++) {
    const hole = document.getElementById(`hole${i+1}`);
    hole.addEventListener("click", play);
    }
}
    
function play() {
    getHole();
    if (this.className.includes("hole_has-mole")) {
        bumpedMole++;
        dead.textContent = bumpedMole;
    } else {
        bumpMissed++;
        lost.textContent = bumpMissed;
    }

    if (bumpedMole === win) {
        alert("You won! 🥳");
        newGame();
    } else if (bumpMissed === lose) {
        alert("You lost! 😣");
        newGame();
    }
}

play();