import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Question } from 'src/app/questions/question';
import { QuestionService } from 'src/app/questions/question.service';

@Component({
  selector: 'app-single-modus',
  templateUrl: './single-modus.component.html',
  styleUrls: ['./single-modus.component.css']
})
export class SingleModusComponent implements OnInit {
question : Question | undefined;
constructor(private route : ActivatedRoute, private router : Router,
  private questionService: QuestionService){
    this.route.params.subscribe(params => {const id = params['id']});
  }
  


  ngOnInit(): void {
    this.getQuestion();
    
  }
  
  getQuestion() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.questionService.getQuestion(id)
    .subscribe(question => this.question = question)
  }

  onClickNext(id : number){
const nextQuestion = id+1;
this.questionService.getQuestion(nextQuestion)
.subscribe(question => this.question = question)
this.router.navigate(['/', nextQuestion])
  }
}
