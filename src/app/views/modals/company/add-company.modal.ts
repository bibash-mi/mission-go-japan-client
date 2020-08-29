import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'add-company-modal',
    templateUrl: './add-company.modal.html'
})
export class AddCompanyModal {
    company: any = {};
    constructor(
        public activeModal: NgbActiveModal,
        private toastr: ToastrService
    ) { }

    add() {
        this.activeModal.close(this.company);
    }

    cancel() {
        this.activeModal.close();
    }
}