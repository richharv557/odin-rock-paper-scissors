// Global variable of options available

const choices = ['rock','paper','scissors'];
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let rounds = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (playerWins != 5 && computerWins !=5) {
            playRound(e.target.id);
            rounds++;
            roundWinner.textContent = `Round ${rounds}`;
            scoreTracker.textContent = `Score: Player - ${playerWins} Computer - ${computerWins} Ties - ${ties}`;
            } else {gameWinner(playerWins)}
         })})
const roundDisplay = document.querySelector(".round");
const showDown = document.querySelector(".showdown");
const roundWinner = document.querySelector(".round-winner");
const scoreTracker = document.querySelector(".score-tracker");

 // Randomly select a number between 0 and 2 and return the value in the choices array.

function computerChoice() {
   return choices[Math.floor(Math.random() * 3)];
}

function checkWinner(choiceP,choiceC) {
    if (choiceP === choiceC) {
        ties++;
        return "Tie";
    } 
    else if (choiceP === "rock" && choiceC === "scissors") {
        playerWins++;
        return  "Player";
    } 
    else if (choiceP === "paper" && choiceC === "rock") {
        playerWins++;
        return "Player";
    } 
    else if (choiceP === "scissors" && choiceC === "paper") {
        playerWins++;
        return  "Player";
    } else{
        computerWins++;
        return "Computer"}
}

function playRound(playerChoice){
    const playerSelection = playerChoice;
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    logShowdown(playerSelection,computerSelection);
    logWinner(winner)
    }
function logWinner(winner) {
    if (winner == 'Player') {
        roundWinner.textContent = "Player wins";
    } else if ( winner == 'Computer') {
        roundWinner.textContent = "Computer wins";
    } else if ( winner == "Tie"){
        roundWinner.textContent = "Tie, nobody wins.";
    }
}
function logShowdown(playerSelection,computerSelection) {
    showDown.textContent = `You played ${playerSelection} and the computer played ${computerSelection}`;
}

function gameWinner(playerWins) {
    if (playerWins == 5) {
        alert("Game over. You win!!!!")
    } else {alert ("Sadly, you lose. Good day, sir!")}
}