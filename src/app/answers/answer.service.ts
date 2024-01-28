import { Injectable } from '@angular/core';
import { Answer } from './answer';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupContentComponent } from '../check-modus/popup-content/popup-content.component';
import { ExamPopupComponent } from '../exam-modus/exam-popup/exam-popup.component';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  correctAnswers : Answer[] = [];
  wrongAnswers : Answer[] = [];
  skippedQuestionCount : number = 0;
  popUpCount : number = 7;
  modalRef : any;
  questionId: number | undefined ;
  uniqueWrongAnswers : Answer[] = [];
  uniqueCorrectAnswers : Answer[] = [];
  score : number = 0;


  constructor(
    private modalService: NgbModal,
    ) { }

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

  getWrongAnswers(): Answer []{
    this.wrongAnswers.forEach(item => {
    })
    return this.wrongAnswers;
  }

  
  getUniqueWrongAnswers(){
    return this.uniqueWrongAnswers = [...new Map(this.wrongAnswers.map(v => [v.questionId, v])).values()];
  }

  getUniqueCorrectAnswers(){
    return this.uniqueCorrectAnswers = [...new Map(this.wrongAnswers.map(v => [v.questionId, v])).values()];
  }

  calculateScore(): number {
    const totalQuestions = this.correctAnswers.length + this.wrongAnswers.length;
    this.score = (this.correctAnswers.length / totalQuestions) * 100;
    return this.score;
  }

  openPopup() {
    this.modalRef = this.modalService.open(PopupContentComponent);
    
  }

  openExamPopup() {
    this.modalRef = this.modalService.open(ExamPopupComponent);
    
  }

  closePopup() { 
 
    this.modalRef.close();
  }

  scoreReset(){
    this.correctAnswers = [];
    this.wrongAnswers = [];
    this.popUpCount  = 7;
    this.skippedQuestionCount  = 0;
    this.uniqueWrongAnswers = [];
    this.uniqueCorrectAnswers  = [];
    this.score = 0;
  }


}

