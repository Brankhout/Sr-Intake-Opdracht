import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Questions } from '../questions';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private _url: string = "https://aartvanhalteren.github.io/db.json"

  constructor(private http: HttpClient,public messageService: MessageService) { }
  

  getQuestions(): Observable<Questions[]>{
    return this.http.get<Questions[]>(this._url)
    
    
  }

}
