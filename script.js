// Global variable of options available

const choices = ['rock','paper','scissors'];
const winners =[];

 // Randomly select a number between 0 and 2 and return the value in the choices array.

function computerChoice() {
   return choices[Math.floor(Math.random() * 3)];
}

// had help with this, basically create a nested set of while loops to ensure that 
// null and invalid options can never be returned.
function playerChoice() {
    let input = button;
    return input;
}
// validates choice returns true if included in global const array 'choices'
function validateChoice(choice){
    if (choices.includes(choice) == true) {
        return true;
    } return false;
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

function playRound(round){
    const playerSelection = buttons;
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection)
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}

function game() {
    const playerScore = 0;
    const computerScore = 0;

    for (let i = 1; i <= 5; i++){
        playRound(i)
    }
    logWins()
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



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       return button.id;
    });
  });
