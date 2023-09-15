"use strict";

const scoreA = document.getElementById("score--0");
const scoreB = document.getElementById("score--1");
const currentScoreA = document.getElementById("current--0");
const currentScoreB = document.getElementById("current--1");
const playerA = document.querySelector(".player--0");
const playerB = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");

scoreA.textContent = "0";
scoreB.textContent = "0";
let curScore = 0;

rollDice.addEventListener("click", function () {
  let diceNum = Math.floor(Math.random() * 6) + 1;

  dice.setAttribute("src", `img/dice-${diceNum}.png`);

  if (playerA.classList.contains("player--active")) {
    if (diceNum === 1) {
      currentScoreA.textContent = "0";
      curScore = 0;
      playerA.classList.remove("player--active");
      playerB.classList.add("player--active");
    } else {
      curScore += diceNum;
      currentScoreA.textContent = curScore;
    }
  } else {
    if (diceNum === 1) {
      currentScoreB.textContent = "0";
      curScore = 0;
      playerB.classList.remove("player--active");
      playerA.classList.add("player--active");
    } else {
      curScore += diceNum;
      currentScoreB.textContent = curScore;
    }
  }
});

hold.addEventListener("click", function () {
  let tempScore = 0;
  if (playerA.classList.contains("player--active")) {
    tempScore = Number(scoreA.textContent);
    tempScore += curScore;
    curScore = 0;
    currentScoreA.textContent = "0";
    scoreA.textContent = tempScore;

    if(scoreA.textContent>=10){
        playerA.classList.add('player--winner')
        rollDice.disabled = true
        hold.disabled = true
    }

    playerA.classList.remove("player--active");
    playerB.classList.add("player--active");
  } else {
    tempScore = Number(scoreB.textContent);
    tempScore += curScore;
    curScore = 0;
    currentScoreB.textContent = "0";
    scoreB.textContent = tempScore;

    if(scoreB.textContent>=10){
        playerB.classList.add('player--winner')
        rollDice.disabled = true
        hold.disabled = true
    }

    playerB.classList.remove("player--active");
    playerA.classList.add("player--active");
  }
});

newGame.addEventListener('click',function(){
    curScore = 0
    playerB.classList.remove("player--active",'player--winner');
    playerA.classList.remove("player--winner");
    playerA.classList.add("player--active");
    scoreA.textContent = '0'
    scoreB.textContent = '0'
    currentScoreA.textContent = '0'
    currentScoreB.textContent = '0'
    rollDice.disabled = false
    hold.disabled = false
})
