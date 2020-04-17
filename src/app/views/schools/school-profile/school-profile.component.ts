import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Moment } from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchoolsService } from 'src/app/shared/services/schools.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.scss']
})
export class SchoolProfileComponent implements OnInit {

  school: any = {};
  students: any[] = [];
  filteredStudents: any[] = [];
  showAPI: boolean = false;
  school_id: string;
  loading: boolean = true;
  searchControl: FormControl = new FormControl();

  constructor(
    private schoolsService: SchoolsService,
    public helper: HelperService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.school_id = params['id'];
      if (this.school_id) {
        this.getSchoolData();
      }
    });
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.search(value);
      });
  }

  getSchoolData() {
    this.schoolsService.getSchoolDetail(this.school_id).subscribe((data: any) => {
      this.school = data.school;
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