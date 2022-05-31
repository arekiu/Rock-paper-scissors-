const options =  ['rock','paper','scissors'];

let computerSelection = '';
let playerSelection = '';


let human = 0;
let computer = 0;



function round(number) {

    function computerPlay() { 
        computerSelection = options[Math.floor(Math.random()* options.length)];
        return computerSelection;
    
    }

    computerPlay();
    playerSelection = (prompt('Choose rock, paper or scissors:')).toLowerCase();
    console.log(`You have chosen ${playerSelection} and the computer have chosen ${computerSelection}`);

    if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        console.log('You won!');
        human += 1;

    }
    else if(computerSelection === playerSelection) {
        console.log('No one won :(');
    }
    else {
        console.log('You lose...')
        computer += 1;
    }
    console.log(`The score is >>> Human:${human} VS Computer:${computer}`);
} 


    


function game() {
    for (let i = 0; i < 5; i++) {
        
        round(i);   
     }
    if (human>computer) {
        console.log('You have defeated the stupid computer!');
    }
    else if (human===computer) {
        console.log('None won, none lose, evereybody is happy!');
    }
    else {
        console.log('The computer is better than you...');
    }
} 

game(); 