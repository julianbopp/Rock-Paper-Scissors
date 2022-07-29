function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);

    // 1 = Rock, 2 = Paper, 3 = Scissors
    let choices = [1, 2, 3];

    return choices[r];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 0;
    }

    if (playerSelection == 1 && computerSelection == 2) {
        return -1;
    }
    if (playerSelection == 1 && computerSelection == 3) {
        return 1;
    }
    if (playerSelection == 2 && computerSelection == 1) {
        return 1;
    }
    if (playerSelection == 2 && computerSelection == 3) {
        return -1;
    }
    if (playerSelection == 3 && computerSelection == 1) {
        return -1;
    }
    if (playerSelection == 3 && computerSelection == 2) {
        return 1;
    }
}

function buttonClick(event) {
    let result = playRound(Number(event.srcElement.id),getComputerChoice());
    updateScore(result);
    displayWinner(result);
}

function displayWinner(result) {
    let winner = document.querySelector('.winner')
    if (result == 0) {
        winner.textContent = "It's a Tie!"
    }
    if (result == 1) {
        winner.textContent = "You Won!"
    }
    if (result == -1) {
        winner.textContent = "Computer Won!"
    }
}

function updateScore(result) {
    let playerScore = document.querySelector('.player')
    let computerScore = document.querySelector('.computer')
    if (result == 1) {
        playerScore.textContent = Number(playerScore.textContent) + 1
    }
    if (result == -1) {
        computerScore.textContent = Number(computerScore.textContent) + 1
    }
}

function game() {
    let playerSelectionButtons = document.querySelectorAll('.playerSelectionButton')
    console.log(playerSelectionButtons)
    playerSelectionButtons.forEach(button => {
        let computerSelection = getComputerChoice();
        button.addEventListener('click', buttonClick);
    })

}

game()