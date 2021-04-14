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

function resetScores() {
    playerScore = 0
    computerScore = 0
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector("#result");
const tally = document.querySelector("#tally");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let comp = computerPlay();
        result = playRound(button.id, comp);
        resultDiv.textContent = result
        if (playerScore === 5) {
            tally.textContent = "Player Score: " + playerScore + " You won!   Computer Score: " + computerScore
            resetScores()
        }else if (computerScore === 5) {
            tally.textContent = "Player Score: " + playerScore + " You've lost!   Computer Score: " + computerScore
            resetScores()
        } else {
            tally.textContent = "Player Score: " + playerScore + "   Computer Score: " + computerScore
        }
    });
});