import { Component } from '@angular/core';
import { QuestionService } from '../questions/question.service';

@Component({
  selector: 'app-learn-modus',
  templateUrl: './learn-modus.component.html',
  styleUrls: ['./learn-modus.component.css'],
})
export class LearnModusComponent {

  constructor(private questionService: QuestionService) {}

  getQuestionListName() : string {
    if (this.questionService.getQuestionsCatalogue() === 'api/questions101') {
      return 'LPIC-1 101' 
    } else {
      return 'LPIC-1 102'
    }
  }
}
