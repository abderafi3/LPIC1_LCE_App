const fs = require("fs");

function parseFileContents(contents) {
  const lines = contents.split("\n");
  let questions = [];
  let currentQuestion = {};
  let correctAnswers = [];
  lines.forEach((line) => {
    line = line.trim(); // Remove leading and trailing whitespace
    if (line) {
      if (line.startsWith("Q")) {
        if (currentQuestion.text) {
          currentQuestion.solutions = correctAnswers;
          questions.push(currentQuestion);
        }
        currentQuestion = {
          number: parseInt(line.replace("Q", "").trim()),
          text: "",
          answers: [],
          solutions: [],
          type: "",
        };
        correctAnswers = [];
      } else if (line.startsWith("A")) {
        currentQuestion.answers.push(line.replace("A", "").trim());
      } else if (line.match(/[ABCDE]/)) {
        const correctAnswersLetters = line.trim().split("");
        correctAnswersLetters.forEach((letter) => {
          correctAnswers.push(
            currentQuestion.answers[letter.charCodeAt(0) - 65],
          ); // Convert letter to array index
        });
        currentQuestion.type = "multiple_choice";
      } else if (line.startsWith("S")) {
        currentQuestion.solutions.push(line.replace("S", "").trim());
        currentQuestion.type = "single_choice";
      } else {
        currentQuestion.text += line; // Add to question text
      }
    }
  });
  if (currentQuestion.text) {
    currentQuestion.solutions = correctAnswers;
    questions.push(currentQuestion);
  }
  return questions;
}

fs.readFile("questions.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const questions = parseFileContents(data);
  console.log(questions);
});
