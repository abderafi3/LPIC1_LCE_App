import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/answers/answer.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css']
})
export class ExamResultComponent implements OnInit {

  constructor(private answerService: AnswerService, private router : Router){}

  totalCorrect : number = 0;
  totalWrong : number = 0;
  totalNotAnswred : number = 0;

  ngOnInit(): void {
  this.totalCorrect = this.answerService.correctAnswers.length;  
  this.totalWrong = this.answerService.wrongAnswers.length;  
  console.log(this.answerService.wrongAnswers)
  this.totalNotAnswred = this.answerService.wrongAnswers.filter(obj => obj.answers[0] === '' || obj.answers.length === 0).length;
  }


  onRestart(){
    this.answerService.scoreReset();
    this.router.navigate(['../exam-modus']);
  }

}

