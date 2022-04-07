// let computerSelection = computerPlay();
// let playerSelection = userPlay();

function computerPlay() {
  let computerChoice = ["rock", "paper", "scissors"];
  let computerChose =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return computerChose;
}

function userPlay() {
  let userChose = prompt("Rock, paper or scissors");
  return userChose.toLowerCase();
}

// console.log(`user = ${playerSelection} - comp = ${computerSelection}`);
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `It is tie! Player: ${playerSelection} - Computer: ${computerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore = computerScore + 1;
    return `Computer win! Player: ${playerSelection} - Computer: ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore = computerScore + 1;
    return `Computer win! Player: ${playerSelection} - Computer: ${computerSelection}`;
  } else userScore = userScore + 1;
  return `Player win! Player: ${playerSelection} - Computer: ${computerSelection}`;
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = userPlay();
    let rounds = playRound(playerSelection, computerSelection);
    console.log(`Round ${i}:`, rounds, userScore, computerScore);
  }

  if (userScore > computerScore) {
    console.log(`User wins! Score is: ${userScore}:${computerScore}`);
  } else if (userScore == computerScore) {
    console.log("It is draw!!!");
  } else {
    console.log(`Computer wins! Score is: ${computerScore}:${userScore}`);
  }
}

game();
