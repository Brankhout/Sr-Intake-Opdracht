import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QuizService } from '../Shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questions = [];

  constructor(private _questionservice: QuizService) { }

  ngOnInit(): void {
    this._questionservice.getQuestions()
    .subscribe(data => this.questions = data);
    console.log(this.questions);
    
  }

}
