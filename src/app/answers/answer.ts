import { Question } from "../questions/question";

export interface Answer{
    questionId : number;
    answers : string[];
    question?: Question;

}
export class Answer {
    constructor(questionId : number, answers: string[], question? : Question) {
        this.questionId = questionId;
        this.answers=answers;
        this.question = question;

        
    }
}