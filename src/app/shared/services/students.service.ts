import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import * as moment from "moment";

@Injectable({
    providedIn: "root"
})
export class StudentsService {

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) { }

    getStudents() {
        return this.http.get(this.config.getAPIRoot() + '/students');
    }

    getStudentDetail(id: string) {
        return this.http.get(this.config.getAPIRoot() + '/student/' + id);
    }

    addStudent(data: any) {
        return this.http.post(this.config.getAPIRoot() + '/student/', data);
    }

}
