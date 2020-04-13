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

    getUsers() {
        return this.http.get(this.config.getAPIRoot() + 'users');
    }

    getUserDetail(id: string) {
        return this.http.get(this.config.getAPIRoot() + 'users/' + id);
    }

    generateNewKey(id: string) {
        return this.http.get(this.config.getAPIRoot() + 'users/' + id);
    }

    getInvoiceData(id: string) {
        return this.http.get(this.config.getAPIRoot() + 'users/' + id + '/invoices');
    }

    generateNewApiKey(id: String) {
        return this.http.post(this.config.getAPIRoot() + 'users/' + id + '/generate', {});
    }

    resetQuota(id: String) {
        return this.http.post(this.config.getAPIRoot() + 'users/' + id + '/reset_quota', {});
    }

    cancelSubscription(id: string) {
        // return this.http.delete(this.config.getAPIRoot() + 'users/' + id);
    }
}
