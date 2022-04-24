const choices = ["rock", "paper", "scissors"];
let comp = choices[Math.floor(Math.random() * choices.length)];
let user = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();

function userChoice() {
  for (let i = 0; i < choices.length; i++) {
    if (user === choices[i]) {
      return true;
    }
  }
  alert("Invalid Choice, please refresh and try again.")
  // return false;
  location.reload();
}
userChoice();

function playGame(user, comp) {
  if (user === "rock") {
    if (comp === "paper") {
      return "You Lose";
    } else if (comp === "scissors") {
      return "You Win";
    } else {
      return "It's a Draw";
    }
  }
  if (user === "paper") {
    if (comp === "scissors") {
      return "You Lose";
    } else if (comp === "rock") {
      return "You Win";
    } else {
      return "It's a Draw";
    }
  }
  if (user === "scissors") {
    if (comp === "rock") {
      return "You Lose";
    } else if (comp === "paper") {
      return "You Win";
    } else {
      return "It's a Draw";
    }
  }
}

console.log(playGame(user, comp));