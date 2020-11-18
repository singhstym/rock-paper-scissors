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
    return "it's a tie";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return "you lost";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return "you win";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return "you win";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "it's a tie";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return "you lost";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return "you lost";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return "you win";
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return "it's a tie";
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
  document.querySelector('.user-score').innerHTML = playerScore;
  document.getElementById("result-text").innerHTML =
    `<p>You chose <span class="text-blue">${playerSelection}</span></p>
    <p>Computer chose <span class="text-red">${computerSelection}</span></p>
    <p>${result}</p>`;

  document.getElementById("result-modal").style.display = "flex";
  setTimeout(() => {
    document.getElementById("result-modal").style.display = "none";
  }, 3000);
}

playGame();
