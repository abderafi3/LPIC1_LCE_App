import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.css']
})
export class CheckResultComponent implements OnInit {
  constructor(private answerService: AnswerService, private router : Router){}

  totalCorrect : number = 0;
  totalWrong : number = 0;
  totalSkipped : number = 0;

  ngOnInit(): void {
  this.totalCorrect = this.answerService.getUniqueCorrectAnswers().length
  this.totalWrong = this.answerService.getUniqueWrongAnswers().length
  this.totalSkipped = this.answerService.skippedQuestionCount;
  }


  onRestart(){
    this.answerService.scoreReset();
    this.router.navigate(['../check-modus/1']);
  }

}
