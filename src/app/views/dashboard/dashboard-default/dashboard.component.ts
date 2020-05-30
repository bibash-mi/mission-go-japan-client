import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/shared/services/stats';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    stats: any = {};

    constructor(
        private statsService: StatsService,
        private auth: AuthService
    ) { }

    ngOnInit() {
        this.statsService.getStats().subscribe((data: any) => {
            this.stats = data.stats;
            console.log(this.stats);
        });

        console.log(this.auth.isAdminUser());
    }

}
