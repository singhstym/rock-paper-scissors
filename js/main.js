let choiceStack = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = choiceStack[randomNum];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return `It's a tie! Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return `You lose! Paper beats Rock. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You win! Paper beats Rock. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return `It's a tie! Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return `You lose! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return `You lose! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You win! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    return `It's a tie! Score: ${playerScore} to ${computerScore}`;
  }
}

function playGame() {
  for (let i = 0; i <= 4; i++) {
    let playerSelection = prompt('Choose either Rock, Paper or Scissors:');
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log(
      `You win! The final score was ${playerScore} to ${computerScore}!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lose! The final score was ${computerScore} to ${playerScore}!`
    );
  } else {
    console.log(`It's a tie!`);
  }
}

playGame();
