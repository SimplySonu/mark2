var readlineSync = require("readline-sync");
var score = 0;

const quiz = [
  { question: "What is the main hero/actor real first name in KGF Chapter 1 movie ? ", answer: "Yash" },
  { question: "When was the movie released ? ", answer: "2018" },
  { question: "What is the director's first name in KGF Chapter 1 movie ? ", answer: "Prashanth" },
  { question: "What is the name give to hero in this movie ? ", answer: "Rocky" },
  { question: "Where is KGF located in India ? ", answer: "Kolar" },
];

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

testMyKnowledge();
checkScore()