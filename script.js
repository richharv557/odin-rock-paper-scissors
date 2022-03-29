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

function playRound(playerSelection, computerSelection) {
// Start round with a user prompt selection, and a random selection for the computer.
    playerSelection = prompt("Enter rock, paper, or scissors.").toLowerCase()
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

function game() {
    let yourScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
       roundResult = alert(playRound());
       if (roundResult.includes("win")) {
            yourScore++;
       } else if (roundResult.includes("lose")) {
           computerScore++;
       } 
       console.log(yourScore + " - " +computerScore) // your code here!
     }
    console.log("Game over");
    }