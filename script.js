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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == 'rock'){
        if(computerSelection ==  'rock'){
            return 'Tie!'
        }else if(computerSelection == 'paper'){
            return 'You lose! Paper beats Rock!'
        }else{
            return 'You win! Rock beats scissors'
        }
    }
    if(playerSelection == 'paper'){
        if(computerSelection == 'paper'){
            return 'Tie!'
        }else if(computerSelection == 'scissors'){
            return 'You lose! Scissors beats paper!'
        }else{
            return 'You win! Paper beats Rock!'
        }
    }
    if(playerSelection == 'scissors'){
        if(computerSelection == 'scissors'){
            return 'Tie!'
        }else if(computerSelection == 'rock'){
            return 'You lose! Rock beats scissors!'
        }else{
            return 'You win! Scissors beats paper!'
        }
    }
}
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));