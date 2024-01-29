import { Question } from '../questions/question';

export interface Answer {
  questionId: number;
  answers: string[];
  question?: Question;
  isCorrect?: boolean;
}
export class Answer {
  constructor(
    questionId: number,
    answers: string[],
    question?: Question,
    isCorrect?: boolean,
  ) {
    this.questionId = questionId;
    this.answers = answers;
    this.question = question;
    this.isCorrect = isCorrect;
  }
}
