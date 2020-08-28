import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import * as moment from "moment";

@Injectable({
    providedIn: "root"
})
export class UsersService {

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) { }

    changePassword(password) {
        return this.http.post(this.config.getAPIRoot() + `/users/change-password`, { password: password });
    }

}
