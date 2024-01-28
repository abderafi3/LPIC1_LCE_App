import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Question } from 'src/app/questions/question';
import { QuestionService } from 'src/app/questions/question.service';

@Component({
  selector: 'app-single-modus',
  templateUrl: './single-modus.component.html',
  styleUrls: ['./single-modus.component.css']
})
export class SingleModusComponent implements OnInit {
question : Question | undefined;
questions = 120;
questionId : number = 1;
answersVisibility: boolean[] = [];
constructor(private route : ActivatedRoute, private router : Router,
  private questionService: QuestionService){}

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
    this.router.navigate(['learn-modus/single-modus', ++this.questionId]);
    this.getQuestion();
  }

  onClickPrev(){
    this.router.navigate(['learn-modus/single-modus', --this.questionId]);
    this.getQuestion();
  }


  toggleAnswer(index: number): void {
    this.answersVisibility[index] = !this.answersVisibility[index];
  }

}