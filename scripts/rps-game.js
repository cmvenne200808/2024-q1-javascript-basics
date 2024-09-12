// @ts-check

/** @type { HTMLElement } */
//@ts-ignore we know player controls is not null
let playerControls = document.getElementById("player-controls");

//game-results
/** @type { HTMLElement } */
//@ts-ignore we know game reults header is not null
let gameResultsHeader = document.getElementById("game-results");

/** @type { HTMLElement } */
//@ts-ignore we know game restart section is not null
let gameRestartSection = document.getElementById("game-restart");


gameResultsHeader.innerText = "Hey there!!";

let isGameOver = false;

let weapons = [
    {
        type: "Rock",
        beats: "Scissors"
    },
    {
        type: "Paper",
        beats: "Rock"
    },
    {
        type: "Scissors",
        beats: "Paper"
    }
];

function pickRandomWeapon(weapons) {
    let randy = Math.floor(Math.random() * weapons.length);
    return weapons[randy];
}

function determineOutcome(playerWeapon, computerWeapon) {
    if (playerWeapon.type === computerWeapon.type) {
        return "It's a tie! Try again!";
    }

    isGameOver = true;
    showRestart();

    if(playerWeapon.beats === computerWeapon.type) {
        return `Player wins! ${playerWeapon.type} beats ${computerWeapon.type}`;
    }

    return `Computer wins! ${computerWeapon.type} beats ${playerWeapon.type}`;
}

function playerControlHandler(e) {
    if(isGameOver) {
        return;
    }

    let weaponName = e.target.innerText;
    let playerWeapon = weapons.find(w => w.type === weaponName);

    if(!playerWeapon) {
        console.log("Error! Player weapon undefined");
        return;
    }

    let computerWeapon = pickRandomWeapon(weapons);

    let result = determineOutcome(playerWeapon, computerWeapon);

    gameResultsHeader.innerText = result;
    console.log(result);
}

function gameRestartHandler(e) {
    if(e.target.id === "btn-restart") {
        isGameOver = false;
        showPlayerControls();
        gameResultsHeader.innerText = "";
    }

}

function showRestart() {
    gameRestartSection.style.display = "initial";
    playerControls.style.display = "none";
}

function showPlayerControls() {
    gameRestartSection.style.display = "none";
    playerControls.style.display = "initial";
}


playerControls?.addEventListener("click", playerControlHandler);
gameRestartSection.addEventListener("click", gameRestartHandler);
