import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answers/answer.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-exam-modus',
  templateUrl: './exam-modus.component.html',
  styleUrls: ['./exam-modus.component.css']
})
export class ExamModusComponent {

  questions : Question [] | undefined;
  examRandomQuestion : Question [] = [];
  randomValues : number[] = [];
  question : Question | undefined;
  randomQuestion : Question | undefined;
  questionId : number = 0;
  randomQuestionId : number = 0;
  actualScore : number = 1;
  examCancelEvnt : number = 0.2;

constructor(private questionService: QuestionService,
            private answerService : AnswerService,
            private router : Router,
            ){
              this.questionId = questionService.questionId;
            }
 
    ngOnInit(): void {
      this.examRandomQuestion = this.getRandomQuestionList();
      this.question = this.questionService.getRandomQuestion(this.questionId);
     
    }

    getRandomQuestion(){
        this.question = this.questionService.getRndQst();
    }

    getRandomQuestionList(){
      return this.examRandomQuestion = this.questionService.examRandomQuestion;
    }

    onTest(){
      // console.log(this.getRandomquestionsId())
      // console.log(this.getRandomQuestions())
      //console.log(this. getRandomQuestion())
  
    }



    onClickPrev(){
     //this.router.navigate(['exam-modus', --this.questionId])
      this.question = this.questionService.getRandomQuestion(--this.questionId)
    }
    onClickNext(){
      //this.router.navigate(['exam-modus', ++this.questionId]);
      this.question =this.questionService.getRandomQuestion(++this.questionId)

    }

    getActualScore(){
      return this.actualScore = this.answerService.correctAnswers.length / this.examRandomQuestion.length;
    }

    onClickEnd(){
      this.router.navigate(['../exam-result']);
    }
}

