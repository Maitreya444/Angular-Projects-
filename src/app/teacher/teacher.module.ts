import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';



@NgModule({
  declarations: [
    TeacherLoginComponent,
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule
  ], 
  exports : [TeacherDetailsComponent , TeacherLoginComponent]
})
export class TeacherModule { }
