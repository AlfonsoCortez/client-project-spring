import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDetailComponent } from './components/teacher-detail/teacher-detail.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';


@NgModule({
  declarations: [TeacherDetailComponent, TeacherListComponent, AddTeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
