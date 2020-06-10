import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StudentsService } from 'src/app/shared/services/students.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteStudentModal } from './delete-student/delete-student.component';


@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    animations: [SharedAnimations]
})
export class StudentsComponent implements OnInit {

    allSelected: boolean;
    students: any = [];
    filteredStudents: any = [];
    loading: boolean = true;
    filter: String = '';

    searchControl: FormControl = new FormControl();

    constructor(
        private studentsService: StudentsService,
        private router: Router,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.getAllStudents();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.search(value);
            });
    }

    getAllStudents() {
        this.studentsService.getStudents(this.filter).subscribe((data: any) => {
            this.students = data.students;
            this.filteredStudents = data.students;
            this.loading = false;
        })
    }

    addUser() {
        this.router.navigate(['/users/add-user']);
    }

    viewStudent(id) {
        this.router.navigate(['/students/profile/' + id]);
    }

    applyFilter() {
        this.searchControl.setValue("");
        this.loading = true;
        this.studentsService.getStudents(this.filter).subscribe((data: any) => {
            //TODO: Need to figure out clean way to do filter and unfilter
            // if filter cleared then we should just show this.students instead of quering again
            this.filteredStudents = this.students = data.students;
            this.loading = false;
        }, err => {
            //TODO: Dispolay error message 
            this.loading = false;
        })
    }

    clearFilter() {
        this.loading = true;
        this.filter = '';
        this.searchControl.setValue("");
        //TODO: Need to figure out clean way to do filter and unfilter
        // if filter cleared then we should just show this.students instead of quering again
        this.getAllStudents();
    }

    deleteStudent(e, value) {
        e.target.parentElement.parentElement.blur();
        let delete_modal = this.modalService.open(DeleteStudentModal, { centered: true });
        delete_modal.result.then((result) => {
            if (result == "delete") {
                this.loading = true;
                this.studentsService.removeStudent(value).subscribe((resp) => {
                    this.getAllStudents();
                    this.searchControl.setValue("");
                }, (err) => {
                    console.log(err);
                })
            }
        })

    }

    search(val) {
        if (val) {
            val = val.toLowerCase();
        } else {
            return this.filteredStudents = [...this.students];
        }

        const columns = Object.keys(this.students[0]);
        if (!columns.length) {
            return;
        }

        const rows = this.students.filter(function (d) {
            for (let i = 0; i <= columns.length; i++) {
                const column = columns[i];
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredStudents = rows;
    }

}