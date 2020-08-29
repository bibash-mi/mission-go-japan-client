import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Moment } from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from 'src/app/shared/services/company.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-company-profile',
    templateUrl: './company-profile.component.html',
})
export class CompanyProfileComponent implements OnInit {

    company: any = {};
    students: any[] = [];
    filteredStudents: any[] = [];
    showAPI: boolean = false;
    company_id: string;
    loading: boolean = true;
    searchControl: FormControl = new FormControl();

    constructor(
        private companysService: CompanyService,
        public helper: HelperService,
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.company_id = params['id'];
            if (this.company_id) {
                this.getCompanyData();
            }
        });
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(value => {
                this.search(value);
            });
    }

    getCompanyData() {
        this.companysService.getCompanyDetail(this.company_id).subscribe((data: any) => {
            this.company = data.company;
            this.filteredStudents = this.students = data.students;
            this.loading = false;
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

    viewStudent(id: number) {
        this.router.navigate(['/students/profile/' + id]);
    }
}