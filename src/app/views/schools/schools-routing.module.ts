import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent } from './schools.component';
import { SchoolProfileComponent } from './school-profile/school-profile.component';
import { AuthGuard } from 'src/app/shared/services/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: SchoolsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    component: SchoolProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }