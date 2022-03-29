// First function is to have the computer pick a random number, and assign that to "rock" "paper" or "scissors"

function computerPlay() {
   let number = Math.floor(Math.random() * 3 + 1);
 // Randomly select a number between 1 and 3. The + 1 is to move the range from 0-2 to 1-3. 
   switch(number) {
      case 1 :
          output = "rock";
          break;
      case 2 :
          output = "paper";
          break;
      case 3 :
          output = "scissors";
          break;
   } return output;
}

//This function is to run a round of rock paper scissors. Contains the actual showdown and results in a victory, loss, or tie message.

function playRound(playerSelection, computerSelection) {
// Start round with a user prompt selection (enforced lower case), and a random selection for the computer.
    playerSelection = prompt("Enter rock, paper, or scissors.").toLowerCase()
// Attempting an input verifier to make sure they only input valid entries.
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Invalid input. Please enter rock, paper, or scissors.").toLowerCase()
    }
    computerSelection = computerPlay()
// Start with tie to eliminate 3 inputs, then run through win/loss conditions for all three options.
    if (playerSelection === computerSelection) {
        return message = "Tie, replay!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return message = "You lose! Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return message = "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return message = "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return message = "You lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return message = "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return message = "You win! Scissors beats paper!";
    }        
}

// This is the 5 round implementation of the series.

function game() {
// start both players at 0    
    let yourScore = 0
    let computerScore = 0
// for loop to cycle through 5 rounds exactly
    for (let i = 0; i < 5; i++) {
// the return message from the playRound() function contains "win" or "lose", which indicates how which score variable to increment
       let roundResult = playRound();
       alert(roundResult);
       if (roundResult.includes("win")) {
            yourScore++;
       } else if (roundResult.includes("lose")) {
           computerScore++;
       } 
//return score after each round of play
       alert(yourScore + " - " +computerScore)
     }
//report outcome after 5 rounds played, for loop ends
     alert(`Game over! The final score was: ${yourScore} - ${computerScore}`);
    }