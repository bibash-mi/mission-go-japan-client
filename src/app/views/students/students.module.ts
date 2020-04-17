import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsComponent } from './students.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    SharedComponentsModule,
    SharedPipesModule,
    // ButtonsLoadingComponent,
    NgbModule
  ],
  declarations: [StudentProfileComponent, StudentsComponent, AddStudentComponent],
  entryComponents: []
})
export class StudentsModule { }
