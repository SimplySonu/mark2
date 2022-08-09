var readlineSync = require("readline-sync");
var score = 0;

const quiz = [
  { question: "What is the main hero/actor first name in KGF Chapter 1 movie ? ", answer: "Yash" },
  { question: "When was the movie released ? ", answer: "2018" },
  { question: "What is the director's first name in KGF Chapter 1 movie ? ", answer: "Prashanth" },
];

function getUserName() {
  var userName = readlineSync.question("May I have your name? ");
  console.log("Welcome " + userName + "!" + " How much do you know about movies?");
}

function testMyKnowledge() {
  for (let i = 0; i < quiz.length; i++) {
    let answer = readlineSync.question(quiz[i].question);
    if (answer.toUpperCase() === quiz[i].answer.toUpperCase()) {
      console.log("You're Right!");
      score += 1;
    } else {
      console.log("Sorry!😓, You're Wrong");
    }
    console.log("Your Current Score is ", score);
    console.log("------------------");
  }
}

function checkScore() {
  if (score === 3) {
    console.log("Congralutations!😍 All your answers were correct !");
  } else {
    console.log("Your final score is:", score);
  }
}

getUserName();
testMyKnowledge();
checkScore()