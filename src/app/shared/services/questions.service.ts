import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  readonly #apiUrl = 'http://localhost:3000';

  readonly #http = inject(HttpClient);

  getQuestions(): Observable<Question[]> {
    return this.#http.get(`${this.#apiUrl}/questions`) as Observable<Question[]>;
  }
}
