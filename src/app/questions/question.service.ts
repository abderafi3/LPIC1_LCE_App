import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

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

  checkCorrectAnswer(){
    
  }

}
