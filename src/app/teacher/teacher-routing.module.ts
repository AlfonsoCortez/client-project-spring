import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherDetailComponent } from './components/teacher-detail/teacher-detail.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teachers',
    pathMatch: 'full'
  },
  {
    path: 'teachers',
    component: TeacherListComponent
  },
  {
    path: 'teacher/:id',
    component: TeacherDetailComponent
  },
  {
    path: 'add',
    component: AddTeacherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
