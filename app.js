

let playerSelection = '';
let playerPoints = 0;
let computerPoints = 0;
const boxWithPlayerChoice = document.getElementById('boxWithPlayerChoice');
const h1 = document.getElementById("animation1");


boxWithPlayerChoice.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'BUTTON') return;

  playerSelection = event.target.id.replace('playerChoice', '').toLowerCase();
  document.getElementById("WhatPlayerChooses").innerHTML = playerSelection;

  if (playerSelection === 'rock') {document.getElementById("WhatPlayerChooses").innerHTML = '&#128074;';

} else if (playerSelection === 'paper'){document.getElementById("WhatPlayerChooses").innerHTML = '&#128400;'

} else {document.getElementById("WhatPlayerChooses").innerHTML = '&#9996;'}
  
  game(playerSelection);
});

const movesList = ["rock", "paper", "scissors"];

const playRound = (playerSelection) => {
  let computerSelection = movesList[Math.floor(Math.random() * movesList.length)];
  if (computerSelection === 'rock') {document.getElementById("WhatComputerChooses").innerHTML = '&#128074;';

  } else if (computerSelection === 'paper'){document.getElementById("WhatComputerChooses").innerHTML = '&#128400;'

  } else {document.getElementById("WhatComputerChooses").innerHTML = '&#9996;'}

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
      if (getComputedStyle(targetDiv).display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };