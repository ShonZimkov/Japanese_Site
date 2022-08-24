import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
