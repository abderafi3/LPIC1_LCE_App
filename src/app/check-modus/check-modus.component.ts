import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';

@Component({
  selector: 'app-check-modus',
  templateUrl: './check-modus.component.html',
  styleUrls: ['./check-modus.component.css']
})
export class CheckModusComponent implements OnInit {
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
    onClickNext(){
      this.router.navigate(['check-modus', ++this.questionId]);
      this.getQuestion();
    }
    
    onClickPrev(){
      this.router.navigate(['check-modus', --this.questionId]);
      this.getQuestion();
    }
    submit(){}
}
