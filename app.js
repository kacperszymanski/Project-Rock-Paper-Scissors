let playerSelection = '';
let playerPoints = 0;
let computerPoints = 0;

const boxWithPlayerChoice = document.getElementById('boxWithPlayerChoice');

boxWithPlayerChoice.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;

  playerSelection = event.target.id.replace('playerChoice', '').toLowerCase();
  document.getElementById("WhatPlayerChooses").innerHTML = `Player chooses ${playerSelection}`;
  game(playerSelection);
});

function playRound(playerSelection) {
  let movesList = ["rock", "paper", "scissors"];
  let computerSelection = movesList[Math.floor(Math.random() * movesList.length)];
    document.getElementById("WhatComputerChooses").innerHTML = `Computer chooses ${computerSelection}`;
  if (playerSelection === computerSelection) return 0;
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")) return 1;
  return 2;
}

function game(playerSelection) {
  let verdict = playRound(playerSelection);

  if (verdict === 0) {
    document.getElementById("whoWinRound").innerHTML = "Draw";
  } else if (verdict === 1) {
    document.getElementById("whoWinRound").innerHTML = "Player wins";
    playerPoints++;
  } else {
    document.getElementById("whoWinRound").innerHTML = "Computer wins";
    computerPoints++;
  }

  document.getElementById("gameResult").innerHTML = `Player points ${playerPoints} - Computer points ${computerPoints}`;
}