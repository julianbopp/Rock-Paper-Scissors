function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);
    let choices = ["R", "P", "S"]

    return choices[r]
}

function rps(playerSelection, computerSelection) {
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

console.log(rps("Rock",getComputerChoice()))
console.log(rps("Paper",getComputerChoice()))
console.log(rps("Scissors",getComputerChoice()))