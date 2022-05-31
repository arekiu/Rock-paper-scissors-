//the 3 possible options defined
const options =  ['rock','paper','scissors'];

//the choice of the computer and the human defined, starting from nothing
let computerSelection = '';
let playerSelection = '';

//the scores to consider who will be the winner
let human = 0;
let computer = 0;


//function to play every round
function round(number) {

    //this defines the random choice of the computer
    function computerPlay() { 
        /*math random choose a number between 0 and 0.99, then it multiplies for the 3 posible options
        giving a result between 0.something and 2.something. then with Math.floor converts in int number
        and finally it wil take an option from the Array (element 0,1 or 2) as a choice */
        computerSelection = options[Math.floor(Math.random()* options.length)];
        //it returns the value to consider in the game
        return computerSelection;
    
    }
    //call the function to have the value of the computer choice
    computerPlay();
    //ask the human for an option and convert to small letters so it coincides with the string options
    playerSelection = (prompt('Choose rock, paper or scissors:')).toLowerCase();
    //shows both selections
    console.log(`You have chosen ${playerSelection} and the computer have chosen ${computerSelection}`);

    //consider the possible winning sceneries
    if ((computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        console.log('You won!');
        human += 1; //adds to the score

    }
    else if(computerSelection === playerSelection) {
        console.log('No one won :(');
    }
    else {
        console.log('You lose...')
        computer += 1;
    }
    //prints the score in every round
    console.log(`The score is >>> Human:${human} VS Computer:${computer}`);
} 


    

//loop to play every round for 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        
        round(i);   //i will increase from 0 to 4, every time executing the function for the round
     }
     //in the end of the 5 considers who have win and lose
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

//calls the functions of the complete game
game(); 