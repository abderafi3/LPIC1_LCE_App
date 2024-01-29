import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questionsUrl = 'api/questions';

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  examQuestionnumbers = 60;

  constructor(private http: HttpClient) {}
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestion(id: number | null): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url);
  }

  getRandomQuestions(): Observable<Question[]> {
    return this.http
      .get<Question[]>(this.questionsUrl)
      .pipe(
        map((questions) =>
          this.SelectRandomQuestions(questions, this.examQuestionnumbers),
        ),
      );
  }

  private SelectRandomQuestions(
    questions: Question[],
    count: number,
  ): Question[] {
    if (questions.length <= count) {
      return questions;
    } else {
      const selectedQuestions: Question[] = [];
      const indices = new Set<number>();
      while (indices.size < count) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!indices.has(randomIndex)) {
          indices.add(randomIndex);
          selectedQuestions.push(questions[randomIndex]);
        }
      }
      return selectedQuestions;
    }
  }
}
