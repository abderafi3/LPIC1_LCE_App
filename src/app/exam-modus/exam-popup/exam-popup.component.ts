import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';

@Component({
  selector: 'app-exam-popup',
  templateUrl: './exam-popup.component.html',
  styleUrls: ['./exam-popup.component.css'],
})
export class ExamPopupComponent {
  constructor(
    private answerService: AnswerService,
    private router: Router,
  ) {}

  score: number = Math.round(this.answerService.score);
  onClickClose() {
    this.answerService.closePopup();
  }

  onClickLearn() {
    this.router.navigate(['learn-modus/single-modus/1']);
    this.answerService.closePopup();
  }
}
