'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = secretNumber;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;
const checkbtn = function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' No Number ';
  }
  //   when user guesses correct Number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' Woah ! Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = 'black';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //   when user guesses greater number than secret Number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too high ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   when user guesses smaller number than secret Number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = ' oops ! Wrong Number';
  }
};

document.querySelector('.check').addEventListener('click', checkbtn);
document.querySelector('.again').addEventListener('click', playAgain);

function playAgain() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = secretNumber;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = 0;
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = ' Start guessing...';

  //   document.querySelector('.number').style.color = 'white';
  document.querySelector('body').style.backgroundColor = '#222';
}
