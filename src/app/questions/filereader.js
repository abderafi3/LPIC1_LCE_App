const fs = require('fs');

// Function to parse the text and create question objects
function parseQuestions(text) {
    const questions = text.split("QUESTION");
    questions.shift(); // Remove empty first element

    const questionObjects = questions.map(question => {
        const lines = question.trim().split("\n");
        const id = parseInt(lines[0].trim().split(":")[0]);
        const questionText = lines[2].trim();
        const answers = lines.slice(3, -1).map(line => line.trim().substring(3));
        const solution = lines[lines.length - 1].trim().split(": ")[1];

        return {
            id: id,
            question: questionText,
            answers: answers,
            solution: solution
        };
    });

    return questionObjects;
}

// Read the file
fs.readFile('/home/asagno/angular/projects/LPIC1_LCE_App/src/assets/LPI-2019-1-101d-QA', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Parse the text and get question objects
    const questions = parseQuestions(data);
    //console.log(questions);

    // Here you can further process the questions array as needed


    const tsString = `export default ${JSON.stringify(questions, null, 4)
      .replace(/"/g, '\'')
      };`;

    // Write the TypeScript string to a TypeScript file
    fs.writeFileSync('data.ts', tsString);
    
    console.log('Data exported to data.ts');


//     const jsonData = JSON.stringify(questions, null, 2); // Optionally, format the JSON with 2 spaces indentation

// // Write data to a JavaScript file
// fs.writeFileSync('questions.js', `const questions = ${jsonData};\n\nmodule.exports = questions;`);

// console.log('Data exported to questions.js');
});
