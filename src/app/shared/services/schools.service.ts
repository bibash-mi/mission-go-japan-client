import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";

@Injectable({
    providedIn: "root"
})
export class SchoolsService {

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) { }

    getSchools() {
        return this.http.get(this.config.getAPIRoot() + '/schools');
    }

    getSchoolDetail(id: string) {
        return this.http.get(this.config.getAPIRoot() + '/school/' + id);
    }

}
