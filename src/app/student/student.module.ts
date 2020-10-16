import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent, AddStudentComponent, StudentCardComponent, UpdateStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class StudentModule { }
