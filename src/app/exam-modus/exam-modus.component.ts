import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answers/answer.service';
import { Answer } from '../answers/answer';

@Component({
  selector: 'app-exam-modus',
  templateUrl: './exam-modus.component.html',
  styleUrls: ['./exam-modus.component.css'],
})
export class ExamModusComponent {
  questions: Question[] | undefined;
  question: Question | undefined;
  questionId = 0;

  inputText = '';
  userAsnwerMulti: string[] = [];
  actualScore = 1;
  examCancelEvnt = 0.2;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.answerService.scoreReset();
    this.questionService.getRandomQuestions().subscribe((questions) => {
      this.questions = questions;
      this.question = this.questions[0];
    });
  }

  getSelectedAnswer(e: any, answer: string): string[] {
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

  onClickPrev() {
    if (this.questions) this.question = this.questions[--this.questionId];
  }

  onClickNext() {
    if (this.questions && this.question) {
      const solution = this.question.solution.sort();
      const userAsnwer: string[] = [];
      userAsnwer.push(this.inputText);

      // Fill-in questions && single-choice questions
      if (this.question.type !== 'multi') {
        if (solution[0] === this.inputText) {
          this.answerService.addCorrectAnswer(
            new Answer(this.questionId, userAsnwer, this.question),
          );
          this.question = this.questions[++this.questionId];
        } else {
          this.answerService.addWrongAnswer(
            new Answer(this.questionId, userAsnwer, this.question),
          );
          this.question = this.questions[++this.questionId];
        }
      } else {
        // Multi-Choice questions
        const equalsCheck = (solution: string[], userAsnwerMulti: string[]) =>
          solution.length === userAsnwerMulti.length &&
          solution.every((v, i) => v === userAsnwerMulti[i]);

        if (solution && equalsCheck(solution, this.userAsnwerMulti)) {
          //Correct answers
          this.answerService.addCorrectAnswer(
            new Answer(this.questionId, this.userAsnwerMulti, this.question),
          );
          this.question = this.questions[++this.questionId];
        } else {
          //Incorrect answers
          this.answerService.addWrongAnswer(
            new Answer(this.questionId, this.userAsnwerMulti, this.question),
          );
          this.question = this.questions[++this.questionId];
        }
      }
      this.inputText = ''; //rest
      this.userAsnwerMulti = [];
    }
    if (this.isScoreLow()) {
      this.answerService.openExamPopup();
      this.onClickEnd();
    }
  }

  isScoreLow() {
    const score = this.answerService.calculateScore();
    if (score < 80) {
      return true;
    } else {
      return false;
    }
  }

  onClickEnd() {
    this.answerService.getExamSolution();
    this.router.navigate(['../exam-result']);
  }

  getQuestionListName() : string {
    if (this.questionService.getQuestionsCatalogue() === 'api/questions101') {
      return 'LPIC-1 101' 
    } else {
      return 'LPIC-1 102'
    }
  }
}
