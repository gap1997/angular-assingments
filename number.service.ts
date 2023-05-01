import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(A: number):boolean {
    if (A <= 1) {
      return false
    }
    for (let i = 2; i < A; i++){
      if (A % i === 0)
      {
        return false
        }
    }
     return true
  }
}
