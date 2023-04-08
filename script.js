function getComputerChoice(){
    let choice = Math.floor(Math.random()*3 + 1)
    if(choice == 1){
        return 'rock';
    }else if(choice == 2){
        return 'paper';
    }else{
        return 'scissors';
    }
}
let scoreComputer = 0;
let scorePlayer = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == 'rock'){
        if(computerSelection ==  'rock'){
            return 'Tie!'; 
        }else if(computerSelection == 'paper'){
            scoreComputer++;
            return 'You lose! Paper beats Rock!';
        }else{
            scorePlayer++;
            return 'You win! Rock beats scissors';
        }
    }
    if(playerSelection == 'paper'){
        if(computerSelection == 'paper'){
            return 'Tie!'
        }else if(computerSelection == 'scissors'){
            scoreComputer++;
            return 'You lose! Scissors beats paper!';
        }else{
            scorePlayer++;
            return 'You win! Paper beats Rock!';
        }
    }
    if(playerSelection == 'scissors'){
        if(computerSelection == 'scissors'){
            return 'Tie!'
        }else if(computerSelection == 'rock'){
            scoreComputer++;
            return 'You lose! Rock beats scissors!';
        }else{
            scorePlayer++;
            return 'You win! Scissors beats paper!';
        }
    }
}
function game(){
    let computer= getComputerChoice();
    let player= prompt();
    let str = playRound(computer, player);
    console.log(str);
}
for(let i = 1; i<=5;++i){
    game();
}
console.log(scoreComputer);
console.log(scorePlayer);
scoreComputer > scorePlayer ? console.log('Computer is the winner!') : console.log('Player is the winner!')