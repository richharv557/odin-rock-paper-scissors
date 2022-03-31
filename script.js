// Global variable of options available
let playerScore = 0;
let computerScore = 0;
let round = 1;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playRound(e.target.id);
        round++
    })
 //       if (playerScore != 5 && computerScore != 5) {
 //           playRound(e.target.id);
})

const choices = ['rock','paper','scissors'];
const winners =[];

 // Randomly select a number between 0 and 2 and return the value in the choices array.

function computerChoice() {
   return choices[Math.floor(Math.random() * 3)];
}

// Trying to get the playerChoice to equal the ID of the element from button press
function playerChoice() {
    let input = button;
    return input;
}

function checkWinner(choiceP,choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } 
    else if (choiceP === "rock" && choiceC === "scissors") {
        return message = "Player";
    } 
    else if (choiceP === "paper" && choiceC === "rock") {
        return "Player";
    } 
    else if (choiceP === "scissors" && choiceC === "paper") {
        return  "Player";
    } else {return "Computer"}
}

function playRound(playerChoice){
    const playerSelection = playerChoice;
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection)
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
    ;
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log(`Game over. Results: Wins - ${playerWins} Losses - ${computerWins} Ties - ${ties}`)
}

function logRound(playerChoice,computerChoice,winner,round) {
    console.log('Round :',round);
    console.log('Player chose: ',playerChoice);
    console.log('Computer chose: ',computerChoice);
    if (winner == 'Tie') {
        console.log('Tie, nobody wins.')
    } else {console.log(winner,' won the round.')
    }
}

