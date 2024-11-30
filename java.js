const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = options[Math.floor(Math.random() * options.length)];
  console.log(choices);
  return choices;
}

function getHumanChoice() {
  const choice = prompt("Rock, Paper or Scissors?");
  return choice;
}

humanScore = 0;
computerScore = 0;

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
  if (result == "Tie") {
    return "Ít is a tie";
  } else if (result == "Human") {
    return `Human wins! ${humanChoice} beats ${computerChoice}`;
  } else {
    return `Computer wins! ${computerChoice} beats ${humanChoice}`;
  }
}

const humanChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));
