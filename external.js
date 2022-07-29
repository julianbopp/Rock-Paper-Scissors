function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);

    // 1 = Rock, 2 = Paper, 3 = Scissors
    let choices = ["1", "2", "3"];

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
    playerSelection = playerSelection.charAt(0).toUpperCase()

    if (playerSelection === computerSelection) {
        return "Tie!";
    }
}


function game() {
      let playerScore = 0
      let computerScore = 0

      for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Put in your choice (Rock, Paper, Scissors)")
        let result = playRound(playerInput, getComputerChoice())
        console.log(result.slice(4,5))

        if (result.slice(4,5) === "W") {
            playerScore = playerScore + 1
        } else if (result.slice(4,5) === "L")  {
            computerScore = computerScore + 1
        }

        console.log(playerScore)
        console.log(computerScore)


      }
}
game()
