import { Component } from '@angular/core';
import { QuestionService } from '../questions/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private questionSerive: QuestionService) {}

  onClick101() {
    const url = 'api/questions101';
    this.questionSerive.examPartChange(url);
  }

  onClick102() {
    const url = 'api/questions102';
    this.questionSerive.examPartChange(url);
  }
}
