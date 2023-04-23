import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentLoginComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule 
  ],
  exports : [StudentDetailsComponent , StudentLoginComponent]
})
export class StudentModule { }
