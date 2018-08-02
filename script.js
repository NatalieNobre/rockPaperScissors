function computerPlay(){
  var optVec = ['rock', 'paper', 'scissor'];
  var optNum = Math.floor(Math.random() * 3);
  return optVec[optNum];
}

function playRound(e){

  rounds++;
  console.log(rounds);

  if (rounds >= 5){
    console.log("Game Over");
    rounds = userScore = compScore = 0;
    return;
  }

  var playerSelection = this.id;
  userPlay.textContent = "User: " + playerSelection;

  var computerSelection = computerPlay();
  compPlay.textContent = "Computer: " + computerSelection;

  if (((playerSelection === 'rock') && (computerSelection === 'scissor'))
  || ((playerSelection === 'paper') && (computerSelection === 'rock'))
  || ((playerSelection === 'scissor') && (computerSelection === 'paper'))){
    result.textContent = "Player wins";
    userScore++;
  }

  else if (((playerSelection === 'scissor') && (computerSelection === 'rock'))
  || ((playerSelection === 'rock') && (computerSelection === 'paper'))
  || ((playerSelection === 'paper') && (computerSelection === 'scissor'))){
    result.textContent = "Computer wins";
    compScore++;
  }

  else {
    result.textContent = "It's a draw";
    userScore++;
    compScore++;
  }
  score.textContent = "User: " + userScore + " Computer: " + compScore;
  return;
}

function game(){

  var rock = document.querySelector('#rock');
  rock.addEventListener('click', playRound);

  var paper = document.querySelector('#paper');
  paper.addEventListener('click', playRound);

  var scissor = document.querySelector('#scissor');
  scissor.addEventListener('click', playRound);
}

game();

var rounds, userScore, compScore;
rounds = userScore = compScore = 0;

const userPlay = document.createElement('div');
userPlay.classList.add('userPlay');

const compPlay = document.createElement('div');
compPlay.classList.add('compPlay');

const result = document.createElement('div');
result.classList.add('result');

const score = document.createElement('div');
result.classList.add('score');


const content = document.createElement('div');
content.classList.add('content');

const container = document.querySelector('#container');

content.appendChild(userPlay);
content.appendChild(compPlay);
content.appendChild(result);
content.appendChild(score);

container.appendChild(content);
