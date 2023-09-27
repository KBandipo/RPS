"use strict";
// import getComputerChoice from "./getComputerChoice.js";

// import getComputerChoice from "./getComputerChoice.js";
// import { rockClicked } from "./clickedfunction.js";
// import { paperclicked } from "./clickedfunction.js";
// import { scissorsClicked } from "./clickedfunction.js";

const heading = document.querySelector(".heading");
const requestChoice = document.querySelector(".requestChoice");
const choiceMessage = document.querySelector("choiceMessage");
let compChoice = document.querySelector(".compChoice");
let compMessage = document.querySelector(".compMessage");
let winner = document.querySelector(".winner");
let roundmessage = document.querySelector(".round");
let compScoreMessage = document.querySelector(".compScore");
let playerScoreMessage = document.querySelector(".playerScore");
let result = document.querySelector(".result");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

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

function resetbtns() {
  rock.innerHTML = "Rock";
  paper.innerHTML = "Paper";
  scissors.innerHTML = "Scissors";
}

let round = 0;
let userScore = 0;
let computerScore = 0;

function rockClicked() {
  // resetbtns();
  requestChoice.textContent = "You pick Rock";
  // rock.textContent = "clicked";
  let getComp = getComputerChoice();
  if (getComp === "scissors") {
    compMessage.textContent = "Computer picks Scissors";
    result.textContent = "You Win! Rock beats Scissors";
    return "win";
  } else if (getComp === "paper") {
    compMessage.textContent = "Computer picks Paper";
    result.textContent = "You Lose! Paper beats Rock";
    return "lose";
  } else {
    compMessage.textContent = "Computer picks Rock";
    result.textContent = "It's a tie";
    return "tie";
  }
}

function paperclicked() {
  // resetbtns();
  requestChoice.textContent = "You select Paper";
  // paper.textContent = "Clicked";
  let getComp = getComputerChoice();

  if (getComp === "scissors") {
    compMessage.textContent = "Computer picks Paper";
    result.textContent = "You Lose! Scissors beats Paper";
    return "lose";
  } else if (getComp === "rock") {
    compMessage.textContent = "Computer picks Rock";
    result.textContent = "You Win! Paper beats Rock";
    return "win";
  } else {
    compMessage.textContent = "Computer picks Paper";
    result.textContent = "It's a tie";
    return "tie";
  }
}
function scissorsClicked() {
  // resetbtns();
  requestChoice.textContent = "You select Scissors";
  // scissors.textContent = "Clicked";
  let getComp = getComputerChoice();
  if (getComp === "rock") {
    compMessage.textContent = "Computer picks Rock";
    result.textContent = "You Lose! Rock beats Scissors";
    return "lose";
  } else if (getComp === "paper") {
    compMessage.textContent = "Computer picks Paper";
    result.textContent = "You Lose! Paper beats Scissors";
    return "lose";
  } else {
    compMessage.textContent = "Computer picks Scissors";
    result.textContent = "It's a tie";
    return "tie";
  }
}

rock.addEventListener("click", rockClicked);

paper.addEventListener("click", paperclicked);

scissors.addEventListener("click", scissorsClicked);
