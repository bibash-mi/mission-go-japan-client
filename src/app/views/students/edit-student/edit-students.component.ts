import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/shared/services/students.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

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
        private studentsService: StudentsService,
        public helper: HelperService,
        private toastr: ToastrService,
        private router: Router
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
            this.loading = false;
        })
    }

    update() {
        console.log(this.student);
        this.student.updated_date = moment().format();
        this.loading = true;
        this.studentsService.updateStudent(this.student).subscribe((data: any) => {
            this.loading = false;
            this.router.navigate(['/students/profile/' + this.student.id]);
        }, err => {
            this.toastr.error(err.error.error, "ERROR", { timeOut: 9000, positionClass: "toast-bottom-center" })
            this.loading = false;
        })
    }
}
