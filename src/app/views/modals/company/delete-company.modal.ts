import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'delete-company-modal',
    templateUrl: './delete-company.modal.html'
})
export class DeleteCompanyModal {
    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    delete() {
        this.activeModal.close('Delete');
    }

    cancel() {
        this.activeModal.close();
    }
}