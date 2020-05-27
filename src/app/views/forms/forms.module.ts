import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OnlineFormComponents } from './online-form/online-form.component';
import { ButtonsLoadingComponent } from '../ui-kits/buttons-loading/buttons-loading.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    SharedComponentsModule,
    SharedPipesModule,
    // ButtonsLoadingComponent,
    NgbModule
  ],
  declarations: [OnlineFormComponents],
  entryComponents: []
})
export class AppFormsModule { }
