function computerPlay(){
  var optVec = ['rock', 'paper', 'scissor'];
  var optNum = Math.floor(Math.random() * 3);
  return optVec[optNum];
}

function playRound(e){

  var playerSelection = this.id;
  userPlay.textContent = "User: " + playerSelection;

  var computerSelection = computerPlay();
  compPlay.textContent = "Computer: " + computerSelection;

  if (((playerSelection === 'rock') && (computerSelection === 'scissor'))
  || ((playerSelection === 'paper') && (computerSelection === 'rock'))
  || ((playerSelection === 'scissor') && (computerSelection === 'paper'))){
    result.textContent = "Player wins";
    return "Player Wins";
  }

  else if (((playerSelection === 'scissor') && (computerSelection === 'rock'))
  || ((playerSelection === 'rock') && (computerSelection === 'paper'))
  || ((playerSelection === 'paper') && (computerSelection === 'scissor'))){
    result.textContent = "Computer wins";
    return "Computer Wins";
  }

  else {
    result.textContent = "It's a draw";
    return "It's a draw";
  }
}

function game(){

  var rock = document.querySelector('#rock');
  rock.addEventListener('click', playRound);

  var paper = document.querySelector('#paper');
  paper.addEventListener('click', playRound);

  var scissor = document.querySelector('#scissor');
  scissor.addEventListener('click', playRound);

  console.log("Game Over");
  return;
}

game();

const userPlay = document.createElement('div');
userPlay.classList.add('userPlay');

const compPlay = document.createElement('div');
compPlay.classList.add('compPlay');

const result = document.createElement('div');
result.classList.add('result');


const content = document.createElement('div');
content.classList.add('content');

const container = document.querySelector('#container');

content.appendChild(userPlay);
content.appendChild(compPlay);
content.appendChild(result);

container.appendChild(content);
