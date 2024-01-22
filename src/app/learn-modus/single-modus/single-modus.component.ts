import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Question } from 'src/app/questions/question';
import { QuestionService } from 'src/app/questions/question.service';

@Component({
  selector: 'app-single-modus',
  templateUrl: './single-modus.component.html',
  styleUrls: ['./single-modus.component.css']
})
export class SingleModusComponent implements OnInit {
question : Question | undefined;
constructor(private route : ActivatedRoute, 
  private questionService: QuestionService){}
  
  ngOnInit(): void {
    this.getQuestion();
  }
  
  getQuestion() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.questionService.getQuestion(id)
    .subscribe(question => this.question = question)
  }

  onClickNext(){
    let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.questionService.getQuestion(id+1)
    .subscribe(question => this.question = question)
  }
}
