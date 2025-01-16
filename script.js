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
}

getComputerChoice()
console.log(cChoice)

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
}

getHumanChoice()
console.log(hChoice)

let humanScore = 0
let computerScore = 0


