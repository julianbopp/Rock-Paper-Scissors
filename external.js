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
    playRound(Number(event.srcElement.id),getComputerChoice());
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