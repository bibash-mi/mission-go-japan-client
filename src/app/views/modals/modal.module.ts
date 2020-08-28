import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChangePasswordModal } from './change-password/change-password.modal';

@NgModule({
    imports: [
        NgbModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        ChangePasswordModal
    ],
    entryComponents: [
        ChangePasswordModal
    ],
})
export class ModalModule { }