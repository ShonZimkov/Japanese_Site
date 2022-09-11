// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quiz-english',
//   templateUrl: './quiz-english.component.html',
//   styleUrls: ['./quiz-english.component.css']
// })
// export class QuizEnglishComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
    selector: 'app-quiz-english',
    templateUrl: './quiz-english.component.html',
    styleUrls: ['./quiz-english.component.css']
  })
  export class QuizEnglishComponent implements OnInit {
  words : any
  words2 : any
  quizText : string = '';
  quizText2 : string = '';

  constructor(private service:WordService) { }

  ngOnInit(): void {
    this.service.getRand()
    .subscribe(response => {
      this.words = response;
      console.log(response)
    });
    this.service.getRand()
    .subscribe(response => {
      this.words2 = response;
      console.log(response)
    });
  }
  
  next() {
    this.service.getRand().subscribe(response => {
      this.words = response;
      console.log(response)});
      this.quizText = ''

  }
  next2() {
    this.service.getRand().subscribe(response => {
      this.words2 = response;
      console.log(response)});
      this.quizText2 = ''

  }
}
