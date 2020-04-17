import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StudentsService } from 'src/app/shared/services/students.service';
import { SchoolsService } from 'src/app/shared/services/schools.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
  animations: [SharedAnimations]
})
export class SchoolsComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 5;
  schools: any[] = [];
  stat: any = {};

  constructor(
    private schoolService: SchoolsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.schoolService.getSchools()
      .subscribe((data: any) => {
        this.schools = data.schools;
        if (data.stat) this.stat = data.stat;
      });
  }

  viewSchool(id: number) {
    this.router.navigate(['/schools/profile/' + id]);
  }


}