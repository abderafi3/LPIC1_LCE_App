/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { Answer } from '../answers/answer';
import { AnswerService } from '../answers/answer.service';

@Component({
  selector: 'app-check-modus',
  templateUrl: './check-modus.component.html',
  styleUrls: ['./check-modus.component.css'],
})
export class CheckModusComponent implements OnInit {
  question: Question | undefined;
  questionId = 1;
  inputText = '';
  userAsnwerMulti: string[] = [];

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private answerService: AnswerService,
  ) {}

  ngOnInit(): void {
    this.answerService.scoreReset();
    this.route.params.subscribe((data: Params) => {
      this.questionId = data['id'];
    });
    this.getQuestion();
  }

  getQuestion(): Question | undefined {
    this.questionService
      .getQuestion(this.questionId)
      .subscribe((question) => (this.question = question));
    return this.question;
  }

  getCheckedAnswer(e: any, answer: string): string[] {
    if (e.target.checked) {
      this.userAsnwerMulti.push(answer);
    } else {
      const index = this.userAsnwerMulti.indexOf(answer);
      if (index !== -1) {
        this.userAsnwerMulti.splice(index, 1);
      }
    }
    return this.userAsnwerMulti.sort();
  }

  onSubmit() {
    const solution = this.getQuestion()?.solution.sort();
    const userAsnwer: string[] = [];
    userAsnwer.push(this.inputText);
    // Fill-in questions && single-choice questions
    if (this.getQuestion()?.type !== 'multi') {
      if (solution && solution[0] === this.inputText) {
        this.answerService.addCorrectAnswer(
          new Answer(this.questionId, userAsnwer),
        );
        this.router.navigate(['check-modus', ++this.questionId]);
        this.getQuestion();
      } else {
        this.answerService.addWrongAnswer(
          new Answer(this.questionId, userAsnwer),
        );
        this.answerService.popUpCount--;
        this.answerService.openPopup();
        if (
          this.questionId &&
          this.questionId >= 2 &&
          this.answerService.popUpCount > 0
        ) {
          this.router.navigate(['check-modus', --this.questionId]);
          this.getQuestion();
        } else if (this.answerService.popUpCount <= 0) {
          this.router.navigate(['learn-modus']);
        }
      }
    } else {
      // Multi-Choice questions
      const equalsCheck = (solution: string[], userAsnwerMulti: string[]) =>
        solution.length === userAsnwerMulti.length &&
        solution.every((v, i) => v === userAsnwerMulti[i]);

      if (solution && equalsCheck(solution, this.userAsnwerMulti)) {
        //Correct answers
        this.answerService.addCorrectAnswer(
          new Answer(this.questionId, this.userAsnwerMulti),
        );
        this.router.navigate(['check-modus', ++this.questionId]);
        this.getQuestion();
      } else {
        //Incorrect answers
        this.answerService.addWrongAnswer(
          new Answer(this.questionId, this.userAsnwerMulti),
        );
        this.answerService.popUpCount--;
        this.answerService.openPopup();
        if (
          this.questionId &&
          this.questionId >= 2 &&
          this.answerService.popUpCount > 0
        ) {
          this.router.navigate(['check-modus', --this.questionId]);
          this.getQuestion();
        } else if (this.answerService.popUpCount <= 0) {
          this.router.navigate(['learn-modus']);
        }
      }
    }
    //routing and rest

    this.inputText = '';
    this.userAsnwerMulti = [];
  }

  onClickSkip() {
    this.answerService.skippedQuestionCount++;
    this.router.navigate(['check-modus', ++this.questionId]);
    this.getQuestion();
  }

  onClickEnd() {
    this.router.navigate(['../check-result']);
  }
}
