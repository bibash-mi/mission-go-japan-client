import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyComponent } from './company.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        CompanyRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        NgxPaginationModule,
        SharedComponentsModule,
        SharedPipesModule,
        NgbModule
    ],
    declarations: [CompanyProfileComponent, CompanyComponent],
    entryComponents: []
})
export class CompanyModule { }
