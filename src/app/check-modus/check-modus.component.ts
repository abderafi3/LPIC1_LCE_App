import { Component, OnInit,  } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Question } from '../questions/question';
import { QuestionService } from '../questions/question.service';
import { Answer } from '../answers/answer';
import { AnswerService } from '../answers/answer.service';

@Component({
  selector: 'app-check-modus',
  templateUrl: './check-modus.component.html',
  styleUrls: ['./check-modus.component.css']
})
export class CheckModusComponent implements OnInit {
  question : Question | undefined;
  questionId : number = 1;
  inputText : string = '';
  userAsnwerMulti : string[] = [];


constructor(private questionService: QuestionService,
    private route : ActivatedRoute,
    private router : Router, 
    private answerService: AnswerService){}
 
    ngOnInit(): void {
      this.route.params.subscribe((data : Params)=> {
        this.questionId = data['id'];
      } )
      this.getQuestion();
      
    }

    getQuestion() : Question | undefined{
      this.questionService.getQuestion(this.questionId)
      .subscribe(question => this.question = question)
      return this.question
    }

  
    getCheckedAnswer(e: any, answer :string) : string[]{
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
    
    onSubmit(){
      let solution = this.getQuestion()?.solution.sort();
      let userAsnwer : string[] = [];
      userAsnwer.push(this.inputText);
      // Fill-in questions && single-choice questions
      if(this.getQuestion()?.type !== 'multi'){
        if(solution && solution[0] === this.inputText){
          this.answerService.addCorrectAnswer(new Answer(this.questionId, userAsnwer))
         } else {
          this.answerService.addWrongAnswer(new Answer(this.questionId, userAsnwer))
         }
        } else {
      // Multi-Choice questions question.solution.includes(answer)
      const equalsCheck = (solution : string[], userAsnwerMulti : string[]) =>
      solution.length === userAsnwerMulti.length &&
      solution.every((v, i) => v === userAsnwerMulti[i]);
     
      if(solution && equalsCheck(solution, this.userAsnwerMulti)){              //Correct answers
        this.answerService.addCorrectAnswer(new Answer(this.questionId, this.userAsnwerMulti))
      } else{                                                                   //Incorrect answers
        this.answerService.addWrongAnswer(new Answer(this.questionId, this.userAsnwerMulti))
      }
      }
      //routing and rest
         this.router.navigate(['check-modus', ++this.questionId]);
         this.getQuestion();
         this.inputText = '';
         this.userAsnwerMulti = [];
    }

    onClickSkip(){
      this.router.navigate(['check-modus', ++this.questionId]);
      this.getQuestion();
    }
    
    onClickEnd(){
      this.router.navigate(['../check-result']);
    }

    test(){
      console.log(this.answerService.correctAnswers.length)
      console.log(this.answerService.wrongAnswers.length)
      console.log('Correct answers')
      this.answerService.getCorrectAnswers()
      console.log('Incorrect answers')
      this.answerService.getWrongAnswers()

    }

}
