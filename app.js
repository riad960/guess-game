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
let randomNumber = parseInt(Math.random() * 21);
let topScore = 0;
let gameScore = 20;
checkButton.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(randomNumber);
  if (!guess) {
    message.textContent = "❌❌ Enter a value to play";
  } else if (guess === randomNumber) {
    display.textContent = guess;
    display.style.width = "30rem";
    document.body.style.background = "#4ade80";
    message.textContent = "🎉🎉Correct Answer💥💥";
    if (gameScore > topScore) {
      topScore = gameScore;
      highscore.textContent = topScore;
    }
  } else if (guess > randomNumber) {
    if (gameScore > 1) {
      document.body.style.background = "#f50057";
      message.textContent = "📈Too high";
      gameScore--;
      score.textContent = gameScore;
      setTimeout(function () {
        document.body.style.background = "#222";
      }, 1000);
    } else {
      message.textContent = "💥You lost the game";
      score.textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (gameScore > 1) {
      document.body.style.background = "#f50057";
      message.textContent = "📉Too low";
      gameScore--;
      score.textContent = gameScore;
      setTimeout(function () {
        document.body.style.background = "#222";
      }, 1000);
    } else {
      message.textContent = "💥You lost the game";
      score.textContent = 0;
    }
  }
});
tryAgain.addEventListener("click", function () {
  document.body.style.background = "#222";
  gameScore = 20;
  display.style.width = "15rem";
  score.textContent = gameScore;
  randomNumber = parseInt(Math.random() * 21);
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
  display.textContent = "?";
});
