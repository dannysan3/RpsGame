let userScore = 0;
let computerScore = 0;

let text = document.getElementById("winCond");
const userScoreSpan = document.getElementById("user-score");
const userCompSpan = document.getElementById("computer-score");


const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");


const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

const resetGame = document.getElementById("reset");

resetGame.addEventListener("click",resetting)




rockDiv.addEventListener("click",spill);

paperDiv.addEventListener("click",spill);

scissorsDiv.addEventListener("click",spill);


function resetting() {
  computerScore = 0;
  userScore = 0;

  userCompSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  text.innerHTML = "Click one of the images below";
}


function spill(e) {

  var alternativer =["paper", "rock","scissors"]
  var valgt = alternativer[Math.floor(Math.random()*3)]
  console.log(valgt);
  if (e.target.id == "r") {

    if (valgt=="rock") {
      text.innerHTML = "Rock vs Rock. Tie!";
    }
    else if (valgt=="paper") {
      computerScore++;
      userCompSpan.innerHTML = computerScore;
      text.innerHTML = "Paper covers rock. You lose!";
    }
    else {

      userScore++;
      userScoreSpan.innerHTML = userScore;
      text.innerHTML = "Rock breaks scissors. You win!";
    }
  }

  else if(e.target.id =="p") {
    if (valgt =="rock") {
      userScore++;
      userScoreSpan.innerHTML = userScore;
      text.innerHTML = "Paper covers rock. You win!";
    }
    else if(valgt =="paper") {
      text.innerHTML = "Paper vs Paper. Tie!";
    }

    else {
      computerScore++;
      userCompSpan.innerHTML = computerScore;
      text.innerHTML = "Scissors cuts paper. You lose!";
    }

  }

  else if(e.target.id=="s") {
    if (valgt =="rock") {
      computerScore++;
      userCompSpan.innerHTML = computerScore;
      text.innerHTML = "Rock breaks scissors. You lose!";
    }

    else if (valgt=="paper") {
      userScore++;
      userScoreSpan.innerHTML = userScore;
      text.innerHTML = "Scissors cuts paper. You win!";

    }

    else{
      text.innerHTML = "Scissors vs Scissors. TIe!";
    }
  }


}
