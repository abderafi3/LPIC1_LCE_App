const fs = require("fs");

function parseQuestions(text) {
  const questions = text.split("QUESTION");
  questions.shift(); // Remove empty first element

  const questionObjects = questions.map((question) => {
    const lines = question.trim().split("\n");
    const id = parseInt(lines[0].trim().split(":")[0]);
    const questionText = lines[2].trim();
    const answers = lines.slice(3, -1).map((line) => line.trim().substring(3));
    const solution = lines[lines.length - 1].trim().split(": ")[1];

    return {
      id: id,
      question: questionText,
      answers: answers,
      solution: solution,
    };
  });

  return questionObjects;
}

// Read the file
fs.readFile(
  "/home/semus/angular/angular/LPIC-1_LCE_App/src/assets/LPI-2019-1-101d-QA",
  "utf8",
  (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const questions = parseQuestions(data);
    const tsString = `export default ${JSON.stringify(
      questions,
      null,
      4,
    ).replace(/"/g, "'")};`;

    fs.writeFileSync("data.ts", tsString);

    console.log("Data exported to data.ts");
  },
);
