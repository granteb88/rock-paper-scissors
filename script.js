function getComputerNumber(max) {
       return Math.floor(Math.random() * max);
        

}

function getComputerChoice() {
    let number = getComputerNumber(3);
    if (number === 2) {
    cChoice = "rock"
    } else if (number === 1) {
    cChoice = "paper"
    } else {
    cChoice = "scissors"};
    return cChoice
}

function getHumanChoice() {
    let hChoice = prompt("Rock, Paper or Scissors?");
    if (hChoice.toLowerCase() === "rock") {
        alert("You Chose Rock");
        hChoice = "rock"
    } else if (hChoice.toLowerCase() === "paper") {
        alert("You Chose Paper");
        hChoice = "paper"
    } else if (hChoice.toLowerCase() === "scissors") {
        alert("You Chose Scissors");
        hChoice = "scissors"
    } else {
        alert("Invalid Choice")
    };
    return hChoice
}


let humanScore = 0;
let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            alert("Round Lost");
            computerScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            alert("Round Tied");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            alert("Round Won");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            alert("Round Tied");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            alert("Round Won");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            alert("Round Lost");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert("Round Won");
            humanScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            alert("Round Lost");
            computerScore += 1;
        } else {
            alert("Round Tied");
        };

    }

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    playRound(humanSelection, computerSelection);
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    if (humanScore>computerScore) {
        alert("Game Won! " + humanScore + " to " + computerScore);
    } else if (humanScore<computerScore) {
        alert("Game Lost! " + humanScore + " to " + computerScore);
    } else {
        alert("Game Tied " + humanScore + " to " + computerScore);
    };
}

playGame()