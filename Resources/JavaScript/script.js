// "use strict";
// import getComputerChoice from "./getComputerChoice.js";

// import getComputerChoice from "./getComputerChoice.js";
// import { rockClicked } from "./clickedfunction.js";
// import { paperclicked } from "./clickedfunction.js";
// import { scissorsClicked } from "./clickedfunction.js";

// const heading = document.querySelector(".heading");
// const requestChoice = document.querySelector(".requestChoice");
// const choiceMessage = document.querySelector("choiceMessage");
// let compChoice = document.querySelector(".compChoice");
// let compMessage = document.querySelector(".compMessage");
// let winner = document.querySelector(".winner");
// let roundmessage = document.querySelector(".round");
// let compScoreMessage = document.querySelector(".compScore");
// let playerScoreMessage = document.querySelector(".playerScore");
// let result = document.querySelector(".result");
// const rock = document.querySelector(".rock");
// const paper = document.querySelector(".paper");
// const scissors = document.querySelector(".scissors");

let compMessage = document.querySelector('.compMessage');

function getComputerChoice() {
  //-Create an array of 'gameChopices'
  let gameChoices = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * gameChoices.length);
  // console.log("Computer picked", gameChoices[choice]);
  if (gameChoices[choice] === "rock") {
    compMessage.textContent = "Computer selects Rock";
  } else if (gameChoices[choice] === "paper") {
    compMessage.textContent = "Computer selects Paper";
  } else {
    compMessage.textContent = "Computer selects Scissors";
  }
  return gameChoices[choice];
}

// function resetbtns() {
//   rock.innerHTML = "Rock";
//   paper.innerHTML = "Paper";
//   scissors.innerHTML = "Scissors";
// }

// let round = 0;
// let userScore = 0;
// let computerScore = 0;

// function rockClicked() {
//   // resetbtns();
//   requestChoice.textContent = "You pick Rock";
//   // rock.textContent = "clicked";
//   let getComp = getComputerChoice();
//   if (getComp === "scissors") {
//     compMessage.textContent = "Computer picks Scissors";
//     result.textContent = "You Win! Rock beats Scissors";
//     return "win";
//   } else if (getComp === "paper") {
//     compMessage.textContent = "Computer picks Paper";
//     result.textContent = "You Lose! Paper beats Rock";
//     return "lose";
//   } else {
//     compMessage.textContent = "Computer picks Rock";
//     result.textContent = "It's a tie";
//     return "tie";
//   }
// }

// function paperclicked() {
//   // resetbtns();
//   requestChoice.textContent = "You select Paper";
//   // paper.textContent = "Clicked";
//   let getComp = getComputerChoice();

//   if (getComp === "scissors") {
//     compMessage.textContent = "Computer picks Paper";
//     result.textContent = "You Lose! Scissors beats Paper";
//     return "lose";
//   } else if (getComp === "rock") {
//     compMessage.textContent = "Computer picks Rock";
//     result.textContent = "You Win! Paper beats Rock";
//     return "win";
//   } else {
//     compMessage.textContent = "Computer picks Paper";
//     result.textContent = "It's a tie";
//     return "tie";
//   }
// }
// function scissorsClicked() {
//   // resetbtns();
//   requestChoice.textContent = "You select Scissors";
//   // scissors.textContent = "Clicked";
//   let getComp = getComputerChoice();
//   if (getComp === "rock") {
//     compMessage.textContent = "Computer picks Rock";
//     result.textContent = "You Lose! Rock beats Scissors";
//     return "lose";
//   } else if (getComp === "paper") {
//     compMessage.textContent = "Computer picks Paper";
//     result.textContent = "You Lose! Paper beats Scissors";
//     return "lose";
//   } else {
//     compMessage.textContent = "Computer picks Scissors";
//     result.textContent = "It's a tie";
//     return "tie";
//   }
// }

// rock.addEventListener("click", rockClicked);

// paper.addEventListener("click", paperclicked);

// scissors.addEventListener("click", scissorsClicked);

let result = document.querySelector('.result');
let winner = document.querySelector('.winner');
let roundmessage = document.querySelector('.round');
let compScoreMessage = document.querySelector('.compScore');
let playerScoreMessage = document.querySelector('.playerScore'); 

let btnsSection = document.querySelector('.btns');
btnsSection.classList.add('hide');

let toggle = 0;

let playAgain = document.querySelector('#playAgain');
playAgain.addEventListener('click', () => {
  if (toggle >= 1) {
    toggle = 0;
  } else {
    toggle += 1; // same as toggle++
    btnsSection.classList.remove('hide');
    playAgain.classList.add('hide');
    result.textContent = 'result';
    winner.textContent = 'Winner';
    roundmessage.textContent = 'ROUND: 0';
    compScoreMessage.textContent = 'COMPUTER SCORE: 0';
    playerScoreMessage.textContent = 'PLAYER SCORE: 0';
  }
  console.log('test'); // Using this to debug issue
});


function displayOverallWinnerInfo(round, userScore, computerScore) {
  if (round === 5) {
    if (userScore > computerScore) {
      winner.textContent = `Winner: You Win!`;
    } 
    if (computerScore > userScore) {
      winner.textContent = `Winner: You Lose!`;
    }
    if (computerScore === userScore) {
      winner.textContent = `Winner: It's a Draw! Play again.`;
    }
    btnsSection.classList.add('hide');
    playAgain.classList.remove('hide');
  }
}

function displayRounds(round) {
  roundmessage.textContent = `ROUND: ${ round }`;
  return round;
}

const requestChoice = document.querySelector('.requestChoice');

let round = 0;
let computerScore = 0;
let userScore = 0;

let btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    if (round >= 5) {
      round = 0;
      computerScore = 0;
      userScore = 0;
    } else {
      round += 1; // same as round++
    }
    displayRounds(round);

    const userChoice = btns[i].getAttribute('id');
    requestChoice.textContent = `You pick ${ userChoice }`;

    let computerChoice = getComputerChoice();
    const computerWins = (computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper');
    const userWins = (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper');
    if (computerChoice === userChoice) {
      result.textContent = "It's a tie for this round! No scores given.";
    } 
    if (computerWins) {
      computerScore += 1;
      compScoreMessage.textContent = `COMPUTER SCORE: ${computerScore}`;
      result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
    }
    if (userWins) {
      userScore += 1;
      playerScoreMessage.textContent = `PLAYER SCORE: ${userScore}`;
      result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
    }
    displayOverallWinnerInfo(displayRounds(round), userScore, computerScore);
  });
}
