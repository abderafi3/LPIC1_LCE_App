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
showSolution : boolean = false;
constructor(private route : ActivatedRoute, private router : Router,
  private questionService: QuestionService){}

  ngOnInit(): void {
    const questionId =this.route.snapshot.paramMap.get('id');
    this.getQuestion();
    
  }
  
  getQuestion() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.questionService.getQuestion(id)
    .subscribe(question => this.question = question)
  }

  onClickNext(){
  const questionId = this.question ? this.question.id : null;
  if (questionId !==null) {
    this.questionService.getQuestion(questionId+1)
    .subscribe(question => this.question = question);

  }
  this.showSolution = false;
  }

  onClickPrev(){
    const questionId = this.question ? this.question.id : null;
    if (questionId !==null) {
    this.questionService.getQuestion(questionId -1 )
    .subscribe(question => this.question = question)
    this.showSolution = false;
    }
  }

  onClickSolution(){
    this.showSolution = true;
  }

}