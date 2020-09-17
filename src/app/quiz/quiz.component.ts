import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QuizService } from '../Shared/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  _question : Questions[];

  answer: string;

  _CurrentQuestion : number = 0;

  _Started : boolean = false;

  constructor(private _questionservice: QuizService) { }

  ngOnInit(): void {
    this.getQuestions();
    
    
  }
  UserAnswer(){
    const ans = this.answer;
    console.log(ans);
  }

  StartQuiz(): void{
    this._Started = true;
    if(this._CurrentQuestion == 0){
    this._CurrentQuestion++;
    }
  }
  nextQuestion(): void{
    if(this._CurrentQuestion < 5){
    this._CurrentQuestion++;
    }
  }

  getQuestions(): void {
    this._questionservice.getQuestions()
        .subscribe(questions => this._question = questions);

        }
  getQuestionid(answerId: number): boolean{
    if(answerId == this._CurrentQuestion){
      return true;
    }
  }

  getQuestionType(answertype: string): boolean{
    if(answertype == "multiple_choice"){
      return true;
  }
}
}
