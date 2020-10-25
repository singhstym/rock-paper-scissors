// Modal toggle
document.getElementById('rules-text').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'flex';
});

document.getElementById('close-icon').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'none';
});

// Game code
let choiceStack = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let result;

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = choiceStack[randomNum];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return "TIE";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return "YOU LOST";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return "YOU WIN";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return "YOU WIN";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "TIE";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return "YOU LOST";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return "YOU LOST";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return "YOU WIN";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return "TIE";
  }
}

let icon = document.querySelectorAll('.icon');
icon.forEach(element => { element.addEventListener('click', playGame) });

function playGame() {

  let imageData = this;
  let playerSelection = imageData.dataset.image;
  let computerSelection = computerPlay();

  result = playRound(playerSelection, computerSelection);

  document.querySelector('.computer-score').innerHTML = computerScore;
  document.querySelector('.your-score').innerHTML = playerScore;
  document.querySelector('.everyRoundResult').innerHTML =
    `Computer : ${computerSelection}<br>
    Player : ${playerSelection}<br>
    ${result}`;

  document.querySelector('.resultContainer').style.display = "flex";
  setTimeout(() => {
    document.querySelector('.resultContainer').style.display = "none";
  }, 2000);
}

playGame();
