/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupContentComponent } from '../check-modus/popup-content/popup-content.component';
import { ExamPopupComponent } from '../exam-modus/exam-popup/exam-popup.component';
import { QuestionService } from '../questions/question.service';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  correctAnswers: Answer[] = [];
  wrongAnswers: Answer[] = [];
  combinedAnswers: Answer[] = [];
  answersVisibility: boolean[] = [];

  skippedQuestionCount = 0;
  popUpCount = 7;
  modalRef: any;
  questionId: number | undefined;
  uniqueWrongAnswers: Answer[] = [];
  uniqueCorrectAnswers: Answer[] = [];
  score = 0;

  constructor(
    private modalService: NgbModal,
    private questionService: QuestionService,
  ) {}

  addCorrectAnswer(answer: Answer) {
    this.correctAnswers.push(answer);
  }

  addWrongAnswer(answer: Answer) {
    this.wrongAnswers.push(answer);
  }

  getCorrectAnswers() {
    return this.correctAnswers;
  }

  getWrongAnswers(): Answer[] {
    return this.wrongAnswers;
  }

  getUniqueWrongAnswers() {
    return (this.uniqueWrongAnswers = [
      ...new Map(this.wrongAnswers.map((v) => [v.questionId, v])).values(),
    ]);
  }

  getUniqueCorrectAnswers() {
    return (this.uniqueCorrectAnswers = [
      ...new Map(this.correctAnswers.map((v) => [v.questionId, v])).values(),
    ]);
  }

  getExamSolution(): Answer[] {
    this.combinedAnswers = [
      ...this.correctAnswers.map((answer) => ({
        ...answer,
        isCorrect: true,
        answer: answer.question?.solution,
      })),
      ...this.wrongAnswers.map((answer) => ({
        ...answer,
        correct: false,
        answer: answer.answers,
      })),
    ];
    this.combinedAnswers.sort((a, b) => a.questionId - b.questionId);
    return this.combinedAnswers;
  }

  calculateScore(): number {
    const totalQuestions = this.questionService.examQuestionnumbers;
    this.score = (1 - this.wrongAnswers.length / totalQuestions) * 100;
    return this.score;
  }

  openPopup() {
    this.modalRef = this.modalService.open(PopupContentComponent);
  }

  openExamPopup() {
    this.modalRef = this.modalService.open(ExamPopupComponent);
  }

  closePopup() {
    this.modalRef.close();
  }

  showAnswer(index: number): void {
    this.answersVisibility[index] = !this.answersVisibility[index];
  }

  scoreReset() {
    this.correctAnswers = [];
    this.wrongAnswers = [];
    this.popUpCount = 7;
    this.skippedQuestionCount = 0;
    this.uniqueWrongAnswers = [];
    this.uniqueCorrectAnswers = [];
    this.score = 0;
  }
}
