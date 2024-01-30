import { Component } from '@angular/core';
import { QuestionService } from '../questions/question.service';

@Component({
  selector: 'app-learn-modus',
  templateUrl: './learn-modus.component.html',
  styleUrls: ['./learn-modus.component.css'],
})
export class LearnModusComponent {
  questionListName: string = '';
  constructor(private questionService: QuestionService) {}
  getQuestionListName() {
    if (this.questionService.getQuestionCatalogue()) {
    }
  }
}
