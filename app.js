
let playerSelection = ''
let playerPoints = 0;
let computerPoints = 0;

const boxWithplayerChoice = document.getElementById('boxWithplayerChoice');

boxWithplayerChoice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    playerChoice = event.target.id
    document.getElementById("WhatPlayerChoese").innerHTML = `player choese ${playRound(playerChoice)}`
    game(playerChoice)

})

function playRound(playerChoice) {
    let movesList = ["rock", "paper", "scissors"];
    let computerSelection = movesList[Math.floor(Math.random() * movesList.length)];
    if (playerChoice === 'playerChoiceScissors') {
        playerSelection = "scissors"
    } else if (playerChoice === 'playerChoicePaper') {
        playerSelection = "paper"
    } else if (playerChoice === 'playerChoiceRock') {
        playerSelection = "rock"
    }

    if (playerSelection === computerSelection) {
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        return 1;
    } else {
        return 2;
    }
}

function game(playerChoice) {


    let verdict = playRound(playerChoice);
    if (verdict === 0) {
        document.getElementById("whoWinRound").innerHTML = "Draw";
    } else if (verdict === 1) {
        document.getElementById("whoWinRound").innerHTML = "Player wins";
        playerPoints++;
    } else {
        document.getElementById("whoWinRound").innerHTML = "Computer wins";
        computerPoints++;
    }


}

