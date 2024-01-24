import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { QuestionService } from '../questions/question.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  answers : Answer[] | undefined;
  correctAnswers : Answer[] = [];
  wrongAnswers : Answer[] = [];
  correctAnswerCount : number = 0;
  wrongAnswerCount : number = 0;
  skippedQuestionCount : number = 0;
  popUpCount : number = 7;

  constructor(private questionService: QuestionService) { }

  addCorrectAnswer(answer : Answer){
    this.correctAnswers.push(answer);
    }

  addWrongAnswer(answer : Answer){
      this.wrongAnswers.push(answer);
      }

  getCorrectAnswers(){
    this.correctAnswers.forEach(item => {
      console.log(item)
    })
  }

  getWrongAnswers(){
    this.wrongAnswers.forEach(item => {
      console.log(item)
    })
  }

  addAnswer(id : number, answer: string[]){
    this.answers?.push(new Answer(id, answer));
    }
}
