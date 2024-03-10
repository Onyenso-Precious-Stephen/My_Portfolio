
let score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


updatescore();

let isAutoPlaying = false;
let intervalId;


function clearIntervalF(){
  
  clearInterval(intervalId);
  isAutoPlaying = false;

}


function autoplay() {
  if(!isAutoPlaying) {
   intervalId = setInterval(function() {
      const playerMove = pickComputerMove();
      playgame(playerMove);
    }, 1000);
    isAutoPlaying = true;

} else {
  clearIntervalF();

}

}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playgame('rock');
})


document.querySelector('.js-paper-button').addEventListener('click', () => {
  playgame('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playgame('scissors');
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    playgame('rock');
  } else if (event.key === 'p') {
    playgame('paper');
  } else if (event.key === 's') {
    playgame('scissors');
  }
})

function playgame(playmove){
  
const computerMove = pickComputerMove();

let result = '';

  if(playmove === 'scissors') {

          if (computerMove === 'rock') {
    result = 'you lose.';
    } else if (computerMove === 'paper') {
    result = 'you win.';
    } else if (computerMove === 'scissors') {
    result = 'A tie.';
    }

  } else if (playmove === 'paper') {
        if (computerMove === 'rock') {
      result = 'you win.';
    } else if (computerMove === 'paper') {
      result = 'A tie.';
    } else if (computerMove === 'scissors') {
      result = 'you lose.';
    }
  }else if (playmove === 'rock') {
      if (computerMove === 'rock') {
      result = 'A tie.';
    } else if (computerMove === 'paper') {
      result = 'you lose.';
    } else if (computerMove === 'scissors') {
      result = 'you win.';
    }
  }

    if (result === 'you win.') {
      score.wins += 1;
    } else if (result === 'you lose.'){
      score.losses += 1;
    }else if (result === 'A tie.'){
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.js-result').innerHTML = `${result}`;

    document.querySelector('.js-moves').innerHTML =
     `You
  <img src="images/${playmove}-emoji.png" alt="" class="move_icon">
  <img src="images/${computerMove}-emoji.png" alt="" class="move_icon">
  Computer
`;
}

function updatescore(){
  document.querySelector('.js-score').innerHTML = 
`win: ${score.wins}, losses: ${score.losses}, tie: ${score.ties}. `;
}

function pickComputerMove() {
  const randoNumber = Math.random();
  let computerMove = '';

if (randoNumber >= 0 && randoNumber < 1 / 3) { 
computerMove = 'rock';
} else if (randoNumber >= 1 / 3 && randoNumber < 2 / 3) {
computerMove = 'paper';
} else if (randoNumber >= 2 /3 && randoNumber < 1) {
computerMove = 'scissors'
}

return computerMove;

}

function resartScore() {
  clearIntervalF();
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updatescore();

}