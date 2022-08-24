import { Pipe, PipeTransform } from '@angular/core';
import { WordService } from '../services/word.service';

@Pipe({ name: 'appFilterTrans' })
export class FilterTransPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchTextTrans search string
   * @returns list of elements filtered by search text or []
   * 
   */
   constructor(private service: WordService) { }

   
  transform(items: any[], searchTextTrans: string): any[] {
    

    if (!items) {
      return [];
    }
    if (!searchTextTrans) {
      return [];
    }
    searchTextTrans = searchTextTrans.toLocaleLowerCase();

    return items.filter(it => {
      return it.translation.includes(searchTextTrans);
    });
  }
}