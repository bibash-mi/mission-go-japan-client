import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'change-password-modal',
    templateUrl: './change-password.modal.html'
})
export class ChangePasswordModal {
    user: any = {};
    constructor(
        public activeModal: NgbActiveModal,
        private toastr: ToastrService
    ) { }

    change() {
        if (this.user.password == this.user.confirm_password) {
            this.activeModal.close(this.user);
        } else this.toastr.error("New Password does not match confirm password.", "Error");

    }

    cancel() {
        this.activeModal.close();
    }
}