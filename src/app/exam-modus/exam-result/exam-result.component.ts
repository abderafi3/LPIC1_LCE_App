import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/answers/answer';
import { AnswerService } from 'src/app/answers/answer.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css'],
})
export class ExamResultComponent implements OnInit {
  constructor(
    private answerService: AnswerService,
    private router: Router,
  ) {}
  combinedAnswers: Answer[] = this.answerService.combinedAnswers;
  totalCorrect = 0;
  totalWrong = 0;
  totalNotAnswred = 0;
  answersVisibility: boolean[] = [];

  ngOnInit(): void {
    this.totalCorrect = this.answerService.correctAnswers.length;
    this.totalWrong = this.answerService.wrongAnswers.length;
    this.totalNotAnswred = this.answerService.wrongAnswers.filter(
      (obj) => obj.answers[0] === '' || obj.answers.length === 0,
    ).length;
  }

  onRestart() {
    this.answerService.scoreReset();
    this.router.navigate(['../exam-modus']);
  }
}
