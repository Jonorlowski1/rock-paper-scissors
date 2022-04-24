// !Pseudo-Code

//? Push computer choice to empty array????
// Create a loop that goes through the array?

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock

// clear user and comp
// refresh the page



const choices = ["rock", "paper", "scissors"];
let rand = choices[Math.floor(Math.random() * choices.length)];
let user = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();

// let comp = [];
// function compChoice() {
//   comp.push(rand);
//   console.log(comp)
// }
// compChoice();

const checkMatch = function (user, rand) {
  console.log("working");
  if (user === rand) {
    console.log("match");
  } else {
    console.log("not a match");
  }
};

checkMatch(user, rand);



//! USER CHOICE IS STORED AND CHECKED
// let userChoice = function () {
//   for (let i = 0; i < choices.length; i++) {
//     if (user === choices[i]) {
//       return true;
//     }
//   }
//   alert("Invalid Choice, please refresh and try again.")
//   return false;
// };
// userChoice();

// !MATCHING?
// function userMatch(userChoice, choices) {
//   if (userChoice === choices[i]) {
//     return true
//   } else {
//     alert("does not match available choices")
//   }
// }
// choices.forEach(userMatch);

// * Winning/Losing conditions
// if user === "rock" && comp === "scissors", return "you win",
//  else if user === "rock" && comp === "paper", return "you lose",
//  else return draw

// if user === "paper" && comp === "rock", return "you win",
//  else if user === "paper" && comp === "scissors", return "you lose",
//  else return draw

// if user === "scissors" && comp === "paper", return "you win",
//  else if user === "scissors" && comp === "rock", return "you lose",
//  else return draw
