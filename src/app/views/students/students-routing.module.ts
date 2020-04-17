import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthGuard } from '../../shared/services/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    component: StudentProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add_new_student',
    component: AddStudentComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }