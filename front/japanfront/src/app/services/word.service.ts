import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private url = 'http://localhost:3005/words';
  private urlrand = 'http://localhost:3005/wordrand';

  constructor(private httpClient: HttpClient) { }

  getWords()  {
    return this.httpClient.get(this.url)   
  }
  getRand(){
    return this.httpClient.get(this.urlrand)
  }
  
  saveWord(data:any)  {
    return this.httpClient.post(this.url,data)   
  }
  deleteWord (id:any) 
  {
    return this.httpClient.delete(`${this.url}/${id}`)   
  }



}
// getHeroes(): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
// }