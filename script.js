function computerPlay() {
   let number = Math.floor(Math.random()*3 + 1);
 // Randomly select a number between 1 and 3. The + 1 is to move the range from 0-2 to 1-3. 
   switch(number) {
      case 1 :
          output = "rock";
          break;
      case 2 :
          output = "paper";
          break;
      case 3:
          output = "scissors";
          break;
   } return output;
}

function playRound(playerSelection, computerSelection) {
// Start with tie to eliminate 3 inputs, then run through win/loss conditions for all three options.
    let playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "Tie, replay!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!";
    }        
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));