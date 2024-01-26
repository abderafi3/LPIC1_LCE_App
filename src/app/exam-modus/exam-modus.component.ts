import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answers/answer.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  questionId : number = 1;
  randomQuestionId : number = 0;
  actualScore : number = 1;
  examCancelEvnt : number = 0.2;

constructor(private questionService: QuestionService,
            private answerService : AnswerService,
            private route : ActivatedRoute,
            private router : Router,
            ){}
 
    ngOnInit(): void {
      this.getQuestions();
       this.getQuestion();
      //  this.getRandomQuestionService(this.randomQuestionId).subscribe((data : Params)=> {
      //    this.randomQuestionId = data['id'];
      //  } )
       this.getRandomQuestion()

    //   this.actualScore.subscribe(message => {
    //     if (message !== this.myVar) {
    //         this.myVar = message;
    //         this.doSomething();
    //     }
    // });
      
    }


    
    getQuestions() : void {
      this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
    }
    
    getRandomquestionsId(){
      let rnd : number [] = [];
      while(rnd.length < 60){
      var r = Math.floor(Math.random() * 120) + 1;
      if(rnd.indexOf(r) === -1)
      rnd.push(r);
      }
        return rnd
            }

    getRandomQuestions()  {
      let x= this.getRandomquestionsId()
      const arr = this.questions?.filter((el, i) => x.some(j => i === j))
    }

    getQuestion() : void {
      this.questionService.getQuestion(this.questionId)
      .subscribe(question => this.question = question)
      
    }
    getRandomQuestionService(id : number) : Observable<Question>{
      return of(this.examRandomQuestion[id])

    }

    getRandomQuestion(): void {
        this.getRandomQuestionService(this.questionId)
        .subscribe(question => this.question = question)
        console.log(this.randomQuestion)
        console.log(this.randomQuestionId)
        console.log(this.randomValues)
        console.log(this.examRandomQuestion)
  
    }

    onClickPrev(){
      this.router.navigate(['exam-modus', --this.questionId]);
      this.getQuestion();
    }

    onTest(){
      return this.getRandomQuestions();
    }
    
    onClickNext(){
      this.router.navigate(['exam-modus', ++this.questionId]);
      this.getQuestion();
    }

    getActualScore(){
      return this.actualScore = this.answerService.correctAnswers.length / this.examRandomQuestion.length;
    }

    onClickEnd(){
      this.router.navigate(['../exam-result']);
    }
}

