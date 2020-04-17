import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Moment } from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student: any = {};
  loading: boolean = false;

  constructor(
    private studentsService: StudentsService,
    public helper: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/students']);
  }

  submit() {
    // this.loading = true;
    this.student.status = "active";
    this.studentsService.addStudent(this.student).subscribe((data: any) => {
      console.log(data);
      // this.loading = false;
    })
    console.log(this.student);
  }
}