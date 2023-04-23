import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
  addResult : number;
  subResult : number;

  constructor(private ArithmaticService : ArithmaticService)
  {
    this.addResult = this.ArithmaticService.add(5,3);
    this.subResult = this.ArithmaticService.sub(5,3);
  }
}
