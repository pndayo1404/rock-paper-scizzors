console.log("Hello world");

function getComputerChoice(computerChoice){ //Get computer choices through Math.random
    let choice = Math.floor(Math.random() * 3);
    
    if (choice == 0){
        computerChoice = "rock";
    }
    else if (choice == 1){
        computerChoice = "paper";
    }
    else if (choice == 2){
        computerChoice = "scizzors";
    }
    return computerChoice;
}

function decideWinner(computerChoice, playerChoice){ //Decide winner with if else
    let result;
    if (computerChoice == "rock"){
        if (playerChoice == "rock"){
            result = "draw";
        }
        else if (playerChoice == "paper"){
            result = "you win";
        }
        else if (playerChoice == "scizzors"){
            result = "you lose";
        }
    }
    else if (computerChoice == "paper"){
        if (playerChoice == "rock"){
            result = "you lose";
        }
        else if (playerChoice == "paper"){
            result = "draw";
        }
        else if (playerChoice == "scizzors"){
            result = "you win";
        }
    }
    else if (computerChoice == "scizzors"){
        if (playerChoice == "rock"){
            result = "you win";
        }
        else if (playerChoice == "paper"){
            result = "you lose";
        }
        else if (playerChoice == "scizzors"){
            result = "draw";
        }
    }
    return result;
}

let countPlayer = 0, countComputer = 0;
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
function countScore(result){ 
    if (result == 'you win'){
        countPlayer += 1;
        // playerScore.textContent = "You:  " + countPlayer + " vs ";
        // displayScore();
    }
    else if (result == 'you lose'){
        countComputer += 1;
        // computerScore.textContent = "Computer:  " + countComputer;
        // displayScore();
    }
}
const displayChoice = document.querySelector('.displayChoice');
function displayScore(playerChoice, computerChoice){
    playerScore.textContent = "You:  " + countPlayer + " vs ";
    computerScore.textContent = "Computer:  " + countComputer;
    displayChoice.textContent = playerChoice + " vs " + computerChoice;
}
const winner = document.querySelector('.matchWinner');
function matchWinner(countPlayer, countComputer){ //Display match winner when score reaches 3
    if (countPlayer == 3){
        winner.textContent += "You won the match!";
        resetGame();
    }
    else if (countComputer == 3){
        winner.textContent += "Computer won the match!";
        resetGame();
    }
}
const resetButton = document.querySelector('.resetGame');
function resetGame(){ 
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', function(e){
        countPlayer = 0;
        countComputer = 0;
        playerScore.textContent = "You:  " + countPlayer + " vs ";
        computerScore.textContent = "Computer:  " + countComputer;
        winner.textContent = '';
        displayChoice.textContent = '';
        resetButton.style.display = 'none';
    })
}
function game(playerChoice){ //Play a game with player's input
    if (countPlayer >= 3 || countComputer >= 3) return;
    let computerChoice = "";
    let result;
    computerChoice = getComputerChoice(computerChoice);
    console.log(computerChoice);
    result = decideWinner(computerChoice, playerChoice);
    console.log(result);
    countScore(result);
    displayScore(playerChoice, computerChoice);
    matchWinner(countPlayer, countComputer);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e)
    {
        let playerChoice = this.className;
        console.log(playerChoice);
        game(playerChoice);
    })  
}
)
