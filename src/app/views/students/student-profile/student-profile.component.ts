import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Moment } from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  student: any = {};
  student_id: string;
  profile_loading: boolean = true;


  constructor(
    private studentsService: StudentsService,
    public helper: HelperService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
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

  editStudent() {
    this.router.navigate(['/students/update_student/' + this.student.id]);
  }

  getStudentData(id) {
    this.studentsService.getStudentDetail(id).subscribe((data: any) => {
      this.student = data.student;
      console.log(this.student);
      this.profile_loading = false;
    })
  }
}