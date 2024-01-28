import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions : Question [] = [];
  examRandomQuestion : Question [] = [];
  randomValues : number[] = [];
  question : Question | undefined;
  randomQuestionIds : Question[]=[];
  randomQuestion : Question | undefined;
  questionId : number = 1;
  randomQuestionId : number = 0;
  actualScore : number = 1;
  examCancelEvnt : number = 0.2;

  private questionsUrl = 'api/questions';

  httpOptions = {headers : new HttpHeaders({'content-type': 'application/json'})};

  constructor(private http: HttpClient) { }
  getQuestions() : Observable<Question[]>
  {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestion(id: number | null): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url);
  }

  getQuestionsList() : Question[] {
   this.getQuestions()
    .subscribe(questions => this.questions = questions as Question[]);
    return this.questions
  }


  getRandomquestionsId(){
    let rnd : number [] = [];
    while(rnd.length < 60){
    let r = Math.floor(Math.random() * 120) + 1;
    if(rnd.indexOf(r) === -1)
    rnd.push(r);
    }
console.log(rnd.sort())
      return rnd.sort()
          }


  getRandomQuestions()  {
    let questionId= this.getRandomquestionsId()
    let questionList = this.getQuestionsList()
    this.examRandomQuestion = questionId.map(index => questionList[index]);
    console.log(this.examRandomQuestion);
    return this.examRandomQuestion

 
  }

  
  getRandomQuestion(id : number ): Question {
    return this.getRandomQuestions()[id];
  }

  getRndQst() : Question {

    return this.getRandomQuestion(this.questionId-1);
  }




}
