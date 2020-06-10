import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/shared/services/students.service';

@Component({
    selector: 'app-modals',
    templateUrl: './edit-students.component.html',
    styleUrls: ['../students.component.scss']
})
export class EditStudentComponent implements OnInit {

    loading: boolean = true;
    student: any = {};
    student_id: string;


    constructor(
        private activeRoute: ActivatedRoute,
        private studentsService: StudentsService
    ) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            if (params['id']) {
                this.student_id = params['id'];
                this.getStudentData(this.student_id);
            }
        });
    }

    getStudentData(id) {
        this.studentsService.getStudentDetail(id).subscribe((data: any) => {
            this.student = data.student;
            console.log(this.student);
            this.loading = false;
        })
    }

    submit() { }
}
