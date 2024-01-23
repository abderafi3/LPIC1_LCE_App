import { Component } from '@angular/core';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-modus',
  templateUrl: './check-modus.component.html',
  styleUrls: ['./check-modus.component.css']
})
export class CheckModusComponent {
  question : Question | undefined;
constructor(private questionService: QuestionService, private route : ActivatedRoute, private router : Router){}

  submit(){}

  ngOnInit(): void {
    const questionId =this.route.snapshot.paramMap.get('id');
    this.getQuestion();
    
  }
  
  getQuestion() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.questionService.getQuestion(id)
    .subscribe(question => this.question = question);

  }
  onClickNext(){
    const questionId = this.question ? this.question.id : null;
    if (questionId !==null) {
      this.questionService.getQuestion(questionId+1)
      .subscribe(question => this.question = question);

    }
    }
  
    onClickPrev(){
      const questionId = this.question ? this.question.id : null;
      if (questionId !==null) {
      this.questionService.getQuestion(questionId -1 )
      .subscribe(question => this.question = question);

      }
    }
}
