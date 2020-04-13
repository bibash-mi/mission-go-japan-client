import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'generate-key-modal',
    templateUrl: './generate-key.modal.html'
})
export class GenerateNewAPIKeyModal {

    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    generate() {
        this.activeModal.close('generate');
    }

    close() {
        this.activeModal.close();
    }
}