import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent 
{ 
  batch = "Fashion Designing"
  student = ["Maitreya", "Penelope", "Nicole","Jhoni"];
  Fees = 50000

  DisplayDetails()
  {
    return "This is Fashion Designing Batch and fees are 50000 only"; 
  }
}
