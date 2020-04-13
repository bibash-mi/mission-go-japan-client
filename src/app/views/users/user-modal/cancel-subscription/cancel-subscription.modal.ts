import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cancel-subscription-modal',
    templateUrl: './cancel-subscription.modal.html'
})
export class CancelSubscriptionModal {

    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    deleteConfirm() {
        this.activeModal.close('delete');
    }

    close() {
        this.activeModal.close();
    }
}