console.log("Hello world");
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (choice == 0){
        computerChoice = "Rock";
    }
    else if (choice == 1){
        computerChoice = "Paper";
    }
    else if (choice == 2){
        computerChoice = "Scizzors";
    }
}