import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private _url: string = "D:\Github reposetories\Sr-Intake-Opdracht\src\assets\Data\Questions.json"

  constructor(private http: HttpClient) { }

  getQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>(this._url);
  }
}
