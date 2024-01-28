import { Component } from '@angular/core';
import { QuestionService } from '../questions/question.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private questionService : QuestionService){}

  onExamStart(){
    this.questionService.getRandomQuestion(this.questionService.questionId);
   //console.log(this.questionService.getRndQst());
        // this.questionService.getRandomquestionsId();
    // this.questionService.getRandomquestionsId();
    // console.log(this.questionService.getRandomquestionsId())
    // console.log(this.questionService.getRandomQuestions())
  }
}
