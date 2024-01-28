
import { Component} from '@angular/core';
import {  Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';


@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent {
  questionId: number | undefined ;
  count : number = 7 ;

  constructor(private answerService: AnswerService,
              private router :Router){}
  
  onPopupOpen(){
    this.count = this.answerService.popUpCount;
    return this.count
  }


  onClickClose(){
    this.answerService.closePopup();   
  }

  onClickLearn(){
    this.router.navigate(['learn-modus/single-modus/1']);
    this.answerService.closePopup();
    this.answerService.popUpCount = 7;
  }

}
