import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService 
{
  add(a: number, b:number):number
  {
    return a+b;
  }
  sub(a: number, b:number):number
  {
    return a-b;
  }
  constructor() { }
}
