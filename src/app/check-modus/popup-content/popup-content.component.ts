import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';
import { QuestionService } from 'src/app/questions/question.service';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent {
  questionId: number | undefined ;
  constructor(private answerService: AnswerService,
              private router :Router,){}

  onClickClose(){
    this.answerService.closePopup();   
  }

  onClickLearn(){
    this.router.navigate(['learn-modus/single-modus/1']);
    this.answerService.closePopup();
  }

}
