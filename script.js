function computerPlay() {
   let number = Math.floor(Math.random()*3 + 1);
   let computerSelection;
 //  
   switch(number) {
      case 1 :
          computerSelection = "rock";
          break;
      case 2 :
          computerSelection = "paper";
          break;
      case 3:
          computerSelection = "scissors";
          break;
   } return computerSelection;
}

function rockPaperScissors() {
    
}

playerSelection = prompt("Enter rock, paper, or scissors")