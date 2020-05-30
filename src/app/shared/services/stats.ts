import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import * as moment from "moment";

@Injectable({
    providedIn: "root"
})
export class StatsService {

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) { }

    getStats() {
        return this.http.get(this.config.getAPIRoot() + '/stats/');
    }

}
