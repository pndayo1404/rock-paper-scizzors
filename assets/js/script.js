console.log("Hello world");

function getComputerChoice(computerChoice){
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
const buttons = document.querySelectorAll('button');
function getPlayerChoice(){
    buttons.forEach(button => button.addEventListener('click', function(e){
        let playerChoice = this.className;
        return playerChoice;
    }))
}

function decideWinner(computerChoice, playerChoice){
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

function game(){
    let computerChoice = "";
    let result = "";
    computerChoice = getComputerChoice(computerChoice);
    console.log(computerChoice);
    let playerChoice = getPlayerChoice();
    // console.log(playerChoice);
    result = decideWinner(computerChoice, playerChoice);
}

game();