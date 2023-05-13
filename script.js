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

function playRound(computerSelection, playerSelection) {
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
            return 'You win! Rock beats scissors!';
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
function game(computer, player){
    let str = playRound(computer, player);
    return `Computer choose ${computer} and you choose ${player}. ${str}` ;
}
const content = document.createElement('div');
const header = document.querySelector('.header');
header.appendChild(content);
let max;

const buttons = document.querySelectorAll('button');

const table = document.createElement('table');
table.style.cssText = 'border: 1px solid black;'
header.appendChild(table);

const tableRow = document.createElement('tr');
table.appendChild(tableRow);

const rowComputer = document.createElement('th');
const rowPlayer = document.createElement('th');
tableRow.appendChild(rowComputer);
tableRow.appendChild(rowPlayer);

const data = document.createElement('tr');
table.appendChild(data);

const dataC = document.createElement('td');
const dataP = document.createElement('td');

data.appendChild(dataC);
data.appendChild(dataP);
rowComputer.textContent = 'Computer';
rowPlayer.textContent = 'Player';
dataC.style.cssText = 'border: 1px solid black;'
dataP.style.cssText = 'border: 1px solid black';
rowPlayer.style.cssText = 'border: 1px solid black; font-family: monospace, fantasy, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;';
rowComputer.style.cssText = 'border: 1px solid black; font-family: monospace, fantasy, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;';
table.style.cssText = 'margin-top: 30px;'
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        content.style.cssText = 'font-family: monospace, fantasy, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif; font-size: 30px; margin-top: 30px;'
        let computer = getComputerChoice();    
        content.textContent = game(computer, button.className);
        dataC.textContent = scoreComputer;
        dataP.textContent = scorePlayer;
        if (scoreComputer === 5 || scorePlayer === 5) {
            if (scoreComputer > scorePlayer) {
                max = 'computer';
            } else {
                max = 'you';
            }
            content.textContent = `Game over! The winner is ${max}`;
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    });
});