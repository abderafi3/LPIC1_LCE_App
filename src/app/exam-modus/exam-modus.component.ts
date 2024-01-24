import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';

@Component({
  selector: 'app-exam-modus',
  templateUrl: './exam-modus.component.html',
  styleUrls: ['./exam-modus.component.css']
})
export class ExamModusComponent {

  question : Question | undefined;
  questionId : number = 1;

constructor(private questionService: QuestionService,
   private route : ActivatedRoute,
    private router : Router){}
 
    ngOnInit(): void {
      this.route.params.subscribe((data : Params)=> {
        this.questionId = data['id'];
      } )
      this.getQuestion();
      
    }
    
    getQuestion() : void {
      this.questionService.getQuestion(this.questionId)
      .subscribe(question => this.question = question)
      
    }

    onClickPrev(){
      this.router.navigate(['exam-modus', --this.questionId]);
      this.getQuestion();
    }
    
    onClickNext(){
      this.router.navigate(['exam-modus', ++this.questionId]);
      this.getQuestion();
    }

    onClickEnd(){
      this.router.navigate(['../exam-result']);
    }
}

