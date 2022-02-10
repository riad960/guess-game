"use strict";
//declearing variables
const between = document.querySelector(".between");
const tryAgain = document.querySelector(".again");
const checkButton = document.querySelector(".check");

const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const display = document.querySelector(".number");
//random number
// let randomNumber = parseInt(Math.random() * 20);
let randomNumber = 20;
let gameScore = 20;
checkButton.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  display.textContent = guess;
  if (!guess) {
    message.textContent = "❌❌ Enter a value to play";
  } else {
    if (guess === randomNumber) {
      document.body.style.background = "#4ade80";
      message.textContent = "🎉🎉Correct Answer💥💥";
    } else {
      document.body.style.background = "#f50057";
      message.textContent = "💢💢Wrong Guess";
      score.textContent = gameScore--;
    }
  }
});
