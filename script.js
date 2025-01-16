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
        alert("You Chose Rock")
    } else if (hChoice.toLowerCase() === "paper") {
        alert("You Chose Paper")
    } else if (hChoice.toLowerCase() === "scissors") {
        alert("You Chose Scissors")
    } else {
        alert("Invalid Choice")
    };

}

getHumanChoice()
