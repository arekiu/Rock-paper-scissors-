const options =  ['rock','paper','scissors'];

let computerSelection = '';

function computerPlay() { 
    computerSelection = options[Math.floor(Math.random()* options.length)];
    return computerSelection;

}

computerPlay();
    

let playerSelection = (prompt('Choose rock, paper or scissors:')).toLowerCase();

console.log(`You have chosen ${playerSelection} and the computer have chosen ${computerSelection}`);

function round(computerSelection,playerSelection) {

    if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        console.log('You won!');

    }
    else if(computerSelection === playerSelection) {
        console.log('No one won :(');
    }
    else {
        console.log('You lose...')
    }
} 

round(computerSelection,playerSelection);