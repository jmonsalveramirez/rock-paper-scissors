const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = options[Math.floor(Math.random() * options.length)];
  console.log(choices);
  return choices;
}

function getHumanChoice() {
  const choice = prompt("Rock, Paper or Scissors?");
  const choiceToLower = choice.toLowerCase;
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function checkWinner(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Tie";
  } else if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "sicssors" && computerChoice == "paper")
  ) {
    return "Human";
  } else {
    return "Computer";
  }
}

function playRound(humanChoice, computerChoice) {
  const result = checkWinner(humanChoice, computerChoice);
  // const toLowerCase = humanChoice.toLowerCase();
  if (result == "Tie") {
    return "Ít is a tie";
  } else if (result == "Human") {
    return `Human wins! ${humanChoice} beats ${computerChoice}`;
  } else {
    return `Computer wins! ${computerChoice} beats ${humanChoice}`;
  }
}

function game() {
  console.log(
    "Welcome! The best of 5 rounds wins. Please make your selectionS"
  );
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
}

game();
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(playRound(humanChoice, computerChoice));
