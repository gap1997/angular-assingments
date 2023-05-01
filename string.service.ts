import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(str: string) {
    let count=0
    for (let i = 0; i < str.length; i++)
    {
      if (str.charAt(i)>= 'A' && str.charAt(i) <= 'z'){
        count++
      }
    }
    
  return count
  }
}
