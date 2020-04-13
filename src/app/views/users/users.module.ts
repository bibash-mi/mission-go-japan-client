import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users.component';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CancelSubscriptionModal } from './user-modal/cancel-subscription/cancel-subscription.modal';
import { GenerateNewAPIKeyModal } from './user-modal/generate-new-key/generate-key.modal';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    SharedComponentsModule,
    SharedPipesModule,
    NgbModule
  ],
  declarations: [UserProfileComponent, UsersComponent, CancelSubscriptionModal, GenerateNewAPIKeyModal],
  entryComponents: [CancelSubscriptionModal]
})
export class UsersModule { }
