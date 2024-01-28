import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answers/answer.service';

@Component({
  selector: 'app-exam-modus',
  templateUrl: './exam-modus.component.html',
  styleUrls: ['./exam-modus.component.css']
})
export class ExamModusComponent {

  questions : Question [] | undefined;
  question : Question | undefined;
  questionId : number = 0;
 
  actualScore : number = 1;
  examCancelEvnt : number = 0.2;

constructor(private questionService: QuestionService,
            private answerService : AnswerService,
            private router : Router,
            ){}
 
    ngOnInit(): void {
      this.questionService.getRandomQuestions().subscribe(questions => {
        this.questions = questions;
        this.question = this.questions[0]; 
      });
     
    }

    onClickPrev(){
     if(this.questions)
      this.question = this.questions[--this.questionId]
    }
    
    onClickNext(){
      if(this.questions)
      this.question = this.questions[++this.questionId]
    }

    onTest(){

  
    }



   

    getActualScore(){
      
    }

    onClickEnd(){
      this.router.navigate(['../exam-result']);
    }
}

