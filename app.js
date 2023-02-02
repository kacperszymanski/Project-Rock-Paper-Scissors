

let playerSelection = '';
let playerPoints = 0;
let computerPoints = 0;
const boxWithPlayerChoice = document.getElementById('boxWithPlayerChoice');
const h1 = document.getElementById("animation1");


boxWithPlayerChoice.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'BUTTON') return;

  playerSelection = event.target.id.replace('playerChoice', '').toLowerCase();
  document.getElementById("WhatPlayerChooses").innerHTML = playerSelection;
  game(playerSelection);
});

const movesList = ["rock", "paper", "scissors"];

const playRound = (playerSelection) => {
  let computerSelection = movesList[Math.floor(Math.random() * movesList.length)];
  document.getElementById("WhatComputerChooses").innerHTML = computerSelection;
  if (playerSelection === computerSelection) return 0;
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")) return 1;
  return 2;
};

const game = (playerSelection) => {
  let verdict = playRound(playerSelection);
  let winMessage;
  if (verdict === 0) winMessage = "Draw";
  else if (verdict === 1) {
    winMessage = "Player wins";
    playerPoints++;
  } else {
    winMessage = "Computer wins";
    computerPoints++;
  }
  document.getElementById("whoWinRound").innerHTML = winMessage;
  document.getElementById("gameResult").innerHTML = `Player points ${playerPoints} - Computer points ${computerPoints}`;
};

const targetDiv = document.getElementById("game");
    const btn = document.getElementById("buttonToStart");
    btn.onclick = function () {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };