import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChangePasswordModal } from './change-password/change-password.modal';
import { AddCompanyModal } from './company/add-company.modal';
import { DeleteCompanyModal } from './company/delete-company.modal';

@NgModule({
    imports: [
        NgbModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        ChangePasswordModal,
        AddCompanyModal,
        DeleteCompanyModal
    ],
    entryComponents: [
        ChangePasswordModal,
        AddCompanyModal,
        DeleteCompanyModal
    ],
})
export class ModalModule { }