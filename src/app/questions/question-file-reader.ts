export class FileReaderComponent {
  questions: any[] = [];

  constructor() {}

  handleFileInput(files: FileList) {
    const file = files.item(0);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const contents = reader.result as string;
        this.parseFileContents(contents);
      };
      reader.readAsText(file);
    }
  }

  private parseFileContents(contents: string) {
    const lines = contents.split('\n');
    let currentQuestion: any = {};
    let correctAnswers: string[] = [];
    lines.forEach((line) => {
      line = line.trim(); // Remove leading and trailing whitespace
      if (line) {
        if (line.startsWith('Q')) {
          if (currentQuestion.text) {
            currentQuestion.solutions = correctAnswers;
            this.questions.push(currentQuestion);
          }
          currentQuestion = {
            number: parseInt(line.replace('Q', '').trim()),
            text: '',
            answers: [],
            solutions: [],
          };
          correctAnswers = [];
        } else if (line.startsWith('A')) {
          currentQuestion.answers.push(line.replace('A', '').trim());
        } else if (line.match(/[ABCDE]/)) {
          const correctAnswersLetters = line.trim().split('');
          correctAnswersLetters.forEach((letter) => {
            correctAnswers.push(
              currentQuestion.answers[letter.charCodeAt(0) - 65],
            ); // Convert letter to array index
          });
        } else {
          currentQuestion.text += line; // Add to question text
        }
      }
    });
    if (currentQuestion.text) {
      currentQuestion.solutions = correctAnswers;
      this.questions.push(currentQuestion);
    }
  }
}
