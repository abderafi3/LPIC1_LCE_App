export interface Answer{
    questionId : number;
    answers : string[];

}
export class Answer {
    constructor(questionId : number, answers: string[]) {
        this.questionId = questionId;
        this.answers=answers;
        
    }
}