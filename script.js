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
            alert("You Lost");
            computerScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            alert("You Tied");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            alert("You Won");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            alert("You Tied");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            alert("You Won");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            alert("You Lost");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert("You Won");
            humanScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            alert("You Lost");
            computerScore += 1;
        } else {
            alert("You Tied");
        };

    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
console.log(humanScore)
console.log(computerScore)
