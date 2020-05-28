import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-online-form',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form.component.scss']
})
export class OnlineFormComponents implements OnInit {

  student: any = {};
  loading: boolean = true;
  school_id: string;

  constructor(
    private studentsService: StudentsService,
    public helper: HelperService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.school_id = params['id'];
      }
      this.loading = false;
    });
  }

  schoolName(id) {
    switch (id) {
      case 'MGJ': return 'Mission Go Japan';
      case 'DNA001': return "Dai Nippon Academy";
      case 'IGC005': return "IGC- Japanese Language & Culture Center";
      case 'KJL006': return "Kansai Int. Japanese Language Center";
      case 'MJL007': return "Mainichi Japanese Language Center";
      case 'PJL004': return "Popular Japanese Language Institute";
      case 'SJL008': return "Sansui Japanese Language Institute";
      case 'SWA002': return "Sewa Japanese Language Institute";
      case 'AWL003': return "Active Worldwide Language Institute";
      default:
        return "Mission Go Japan";
    }
  }
  submit() {
    this.loading = true;
    this.student.status = "applied";
    this.student.school = this.school_id;
    this.student.enrollment_date = moment().format('yyyy-mm-dd');
    this.studentsService.onlineApplication(this.student).subscribe((data: any) => {
      this.toastr.success("Your application submission successfuly. Thank you for applying. Someone will reach out to you soon regarding your application.", "SUCCESS", { timeOut: 9000, positionClass: "toast-bottom-center" })
      this.student = {};
      this.loading = false;
    }, err => {
      this.toastr.error("Your application is submission failed. Please try again or reach out to support@missiongojapan.com.", "ERROR", { timeOut: 9000, positionClass: "toast-bottom-center" })
      this.loading = false;
    })
  }
}