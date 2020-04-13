import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'reset-quota-modal',
    templateUrl: './reset-quota.modal.html'
})
export class ResetQuotaModal {

    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    reset() {
        this.activeModal.close('reset');
    }

    close() {
        this.activeModal.close();
    }
}