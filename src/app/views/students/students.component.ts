import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StudentsService } from 'src/app/shared/services/students.service';


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

  searchControl: FormControl = new FormControl();

  constructor(
    private studentsService: StudentsService,
    private router: Router
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
    this.studentsService.getStudents().subscribe((data: any) => {
      this.filteredStudents = this.students = data.students;
      console.log(this.filteredStudents);
      console.log("HEr eis customers ", data);
    })
  }

  addUser() {
    this.router.navigate(['/users/add-user']);
  }

  viewStudent(id) {
    this.router.navigate(['/students/profile/' + id]);
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