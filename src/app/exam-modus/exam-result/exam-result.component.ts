import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css']
})
export class ExamResultComponent implements OnInit {

  constructor(private answer: AnswerService, private router : Router){}

  totalCorrect : number = 0;
  totalWrong : number = 0;
  totalNotAnswred : number = 0;

  ngOnInit(): void {
  this.totalCorrect = this.answer.correctAnswers.length;  
  this.totalWrong = this.answer.wrongAnswers.length;  
  this.totalNotAnswred = this.answer.wrongAnswers.filter(x => {
    x.answers.length == 0;
  }).length;
  }


  onRestart(){
    this.answer.correctAnswers = [];  
    this.answer.wrongAnswers = [];  
    this.answer.skippedQuestionCount = 0;
    this.router.navigate(['../exam-modus/1']);
  }

}

