import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  words:any;
  
  constructor(private service:WordService ,private httpClient: HttpClient)  {}
  
  ngOnInit() {
      this.service.getWords()
        .subscribe(response => {
          this.words = response;
        });
  }
  private url = 'http://localhost:3005/words';


  getWords()  {
    return this.httpClient.get(this.url)   
  }

}
