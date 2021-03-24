let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let x = Math.floor(Math.random()*3);
    if (x === 1) { return "Rock"}
    else if (x === 2) { return "Paper"
    } else {return "Scissors"}
}

function playRound(playerSelection, computerSelection) {
    let win = false
    if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
       (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ||
       (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        win = true;
        playerScore++
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        win = "draw"
    } else {
        computerScore++
    }
    if (win === "draw") {
        return "Draw! You both played " + computerSelection
    } else if (win) {
        return "You Win! " + playerSelection +" beats " + computerSelection
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}

function game() {
    let i;
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
    console.log("Final score:\nYou: " + playerScore +"\nComputer: " + computerScore)
}

