import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private service:WordService) { }

  ngOnInit(): void {
  }
  getWordFormData(data:any){
    
    console.warn(data)
    this.service.saveWord(data).subscribe((result)=>{
      console.warn(result)
    })
  }

}
