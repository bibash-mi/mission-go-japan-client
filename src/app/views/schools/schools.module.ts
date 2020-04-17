import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentsRoutingModule } from './schools-routing.module';
import { SchoolProfileComponent } from './school-profile/school-profile.component';
import { SchoolsComponent } from './schools.component';

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
    NgbModule
  ],
  declarations: [SchoolProfileComponent, SchoolsComponent],
  entryComponents: []
})
export class SchoolsModule { }
