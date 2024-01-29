import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answers/answer.service';
import { Answer } from '../answers/answer';

@Component({
  selector: 'app-exam-modus',
  templateUrl: './exam-modus.component.html',
  styleUrls: ['./exam-modus.component.css']
})
export class ExamModusComponent {

  questions : Question [] | undefined;
  question : Question | undefined;
  questionId : number = 0;
 
  inputText : string = '';
  userAsnwerMulti : string[] = [];
  actualScore : number = 1;
  examCancelEvnt : number = 0.2;

constructor(private questionService: QuestionService,
            private answerService : AnswerService,
            private router : Router,
            ){}
 
    ngOnInit(): void {
      this.answerService.scoreReset();
      this.questionService.getRandomQuestions().subscribe(questions => {
        this.questions = questions;
        this.question = this.questions[0]; 
      });
     
    }

    getSelectedAnswer(e: any, answer :string) : string[]{
   
      if(e.target.checked){
        this.userAsnwerMulti.push(answer);
      } else {
        let index = this.userAsnwerMulti.indexOf(answer);
        if (index !== -1) {
          this.userAsnwerMulti.splice(index, 1);
        }
      }
      return this.userAsnwerMulti.sort()
    }

    onClickPrev(){
     if(this.questions)
      this.question = this.questions[--this.questionId]
    }
    
    onClickNext(){
      if(this.questions && this.question){
        let solution = this.question.solution.sort();
        let userAsnwer : string[] = [];
        userAsnwer.push(this.inputText);

        // Fill-in questions && single-choice questions
        if(this.question.type !== 'multi'){
                if(solution[0] === this.inputText){
                  console.log(this.inputText)
                  console.log(this.question.solution)
                  console.log('single-fill : Correct')
                this.answerService.addCorrectAnswer(new Answer(this.questionId, userAsnwer, this.question))
                this.question = this.questions[++this.questionId]
                } else {
                  console.log('single-fill : wrong')
                  this.answerService.addWrongAnswer(new Answer(this.questionId, userAsnwer, this.question))
                  this.question = this.questions[++this.questionId]}
            }
                 
          else {
            // Multi-Choice questions
            const equalsCheck = (solution : string[], userAsnwerMulti : string[]) =>
            solution.length === userAsnwerMulti.length &&
            solution.every((v, i) => v === userAsnwerMulti[i]);
       
                if(solution && equalsCheck(solution, this.userAsnwerMulti)){  
                  console.log('-multi : Correct')            //Correct answers
                  this.answerService.addCorrectAnswer(new Answer(this.questionId, this.userAsnwerMulti, this.question))
                  this.question = this.questions[++this.questionId]
                } else{    
                  console.log('-multi : wrong')                                                               //Incorrect answers
                  this.answerService.addWrongAnswer(new Answer(this.questionId, this.userAsnwerMulti, this.question))
                  this.question = this.questions[++this.questionId]
                }
              }
           this.inputText = '';           //rest
           this.userAsnwerMulti = [];
          }
          if(this.isScoreLow()){
            this.answerService.openExamPopup();
            this.onClickEnd();
          }
console.log(this.answerService.calculateScore())

    }

    onTest(){
     this.answerService.getExamSolution()
  
    }


    isScoreLow(){
      const score = this.answerService.calculateScore();
      if((score < 80)){
        return true;
      }else{ 
        return false;
      }
    }



    getActualScore(){
      
    }

    onClickEnd(){
      this.answerService.getExamSolution();
      this.router.navigate(['../exam-result']);
    }
}

