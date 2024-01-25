import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.css']
})
export class CheckResultComponent implements OnInit {
  constructor(private answer: AnswerService, private router : Router){}

  totalCorrect : number = 0;
  totalWrong : number = 0;
  totalSkipped : number = 0;

  ngOnInit(): void {
  this.totalCorrect = this.answer.correctAnswers.length;  
  this.totalWrong = this.answer.wrongAnswers.length;  
  this.totalSkipped = this.answer.skippedQuestionCount;
  }


  onRestart(){
    this.answer.correctAnswers = [];  
    this.answer.wrongAnswers = [];  
    this.answer.skippedQuestionCount = 0;
    this.router.navigate(['../check-modus/1']);
  }

}
