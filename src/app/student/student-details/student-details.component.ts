import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent 
{
    studentdetails = [{"name": "Maitreya" , "age" : 20}, {"name" : "Saksh" , "age" : 19}]
}
