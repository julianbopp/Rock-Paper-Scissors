function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);
    let choices = ["R", "P", "S"]

    return choices[r]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase()

    if (playerSelection === computerSelection) {
        return "Tie!";
    }

    if (playerSelection === "R" && computerSelection === "S") {
        return "You Win! Rock beats Scissors"
    }

    if (playerSelection === "R" && computerSelection === "P") {
        return "You Lose! Paper beats Rock"
    }

    if (playerSelection === "P" && computerSelection === "R") {
        return "You Win! Paper beats Rock"
    }

    if (playerSelection === "P" && computerSelection === "S") {
        return "You Lose! Scissors beats Paper"
    }

    if (playerSelection === "S" && computerSelection === "P") {
        return "You Win! Scissors beat Paper"
    }

    if (playerSelection === "S" && computerSelection === "R") {
        return "You Lose! Rock beats Scissors"
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
