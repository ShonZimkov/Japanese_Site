import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
// import { Subject, scan, map, tap } from 'rxjs';
import { WordService } from './services/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  words : any
  title = 'angular-text-search-highlight';
  searchText = '';
  searchTextTrans =''

  constructor(private service: WordService) { }
  
  ngOnInit() {
    this.service.getWords()
    // .pipe(map(response => response))
    // .subscribe(response => this.words = response)
      .subscribe(response => {
        this.words = response;
        console.log(response)
      });
  }
  deleteWord(data:any){
    
    this.service.deleteWord(data).subscribe((result)=>{
      console.warn(result)
    })
  }




}

