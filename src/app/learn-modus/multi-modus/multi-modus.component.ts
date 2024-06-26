import { Component, Input, OnInit } from '@angular/core';

import { Question } from 'src/app/questions/question';
import { QuestionService } from 'src/app/questions/question.service';

@Component({
  selector: 'app-multi-modus',
  templateUrl: './multi-modus.component.html',
  styleUrls: ['./multi-modus.component.css'],
})
export class MultiModusComponent implements OnInit {
  questions: Question[] = [];
  questionId = 1;
  answersVisibility: boolean[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService
      .getQuestions()
      .subscribe((questions) => (this.questions = questions));
  }

  toggleAnswer(index: number): void {
    this.answersVisibility[index] = !this.answersVisibility[index];
  }
}
