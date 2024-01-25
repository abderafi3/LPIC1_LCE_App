import { Injectable } from '@angular/core';
import { Answer } from './answer';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupContentComponent } from '../check-modus/popup-content/popup-content.component';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  //answers : Answer[] | undefined;

  correctAnswers : Answer[] = [];
  wrongAnswers : Answer[] = [];
  skippedQuestionCount : number = 0;
  popUpCount : number = 7;
  modalRef : any;
  questionId: number | undefined ;
  
  uniqueWrongAnswers : Answer[] = [];

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
      console.log(item)
    })
    return this.wrongAnswers;
  }

  getUniqueWrongAnswers(){
    this.uniqueWrongAnswers = [...new Map(this.wrongAnswers.map(v => [v.questionId, v])).values()];
    this.uniqueWrongAnswers.forEach(item => {
      console.log(item)
    })
  }



  openPopup() {
    this.modalRef = this.modalService.open(PopupContentComponent);
  }

  closePopup() { 
    this.modalRef.close();
  }

  // addAnswer(id : number, answer: string[]){
  //   this.answers?.push(new Answer(id, answer));
  //   }
}

