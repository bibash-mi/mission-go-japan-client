import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";

@Injectable({
    providedIn: "root"
})
export class CompanyService {

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) { }

    getCompanies() {
        return this.http.get(this.config.getAPIRoot() + '/admin/companies');
    }

    getCompanyDetail(id: string) {
        return this.http.get(this.config.getAPIRoot() + '/admin/companies/' + id);
    }

    addCompany(company: any) {
        return this.http.post(this.config.getAPIRoot() + '/admin/companies/', company);
    }

    deleteCompany(id: string) {
        return this.http.delete(this.config.getAPIRoot() + '/admin/companies/' + id);
    }
}
