import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-delete-student',
    templateUrl: './delete-student.component.html'
})
export class DeleteStudentModal {

    student: any = {};
    loading: boolean = false;

    constructor(
        private studentsService: StudentsService,
        public helper: HelperService,
        private modal: NgbActiveModal
    ) { }

    cancel() {
        this.modal.close();
    }

    delete() {
        this.modal.close('delete');
    }
}