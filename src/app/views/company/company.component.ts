import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StudentsService } from 'src/app/shared/services/students.service';
import { SchoolsService } from 'src/app/shared/services/schools.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyModal } from '../modals/company/add-company.modal';
import { ToastrService } from 'ngx-toastr';
import { DeleteCompanyModal } from '../modals/company/delete-company.modal';


@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
    animations: [SharedAnimations]
})
export class CompanyComponent implements OnInit {
    viewMode: 'list' | 'grid' = 'list';
    allSelected: boolean;
    page = 1;
    pageSize = 5;
    companies: any[] = [];
    stat: any = {};
    loading: boolean = true;
    constructor(
        private companyService: CompanyService,
        private router: Router,
        private modalService: NgbModal,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.getCompanies();
    }

    getCompanies() {
        this.companyService.getCompanies()
            .subscribe((data: any) => {
                this.companies = data.companies;
                this.loading = false;
            }, err => this.loading = false);
    }

    addCompany() {
        let company_modal = this.modalService.open(AddCompanyModal);
        company_modal.result.then(result => {
            if (result) {
                this.loading = true;
                this.companyService.addCompany(result).subscribe((resp: any) => {
                    if (resp) {
                        this.toastr.success(resp.message, "Success");
                        this.getCompanies();
                    }
                }, err => {
                    console.log(err);
                    this.toastr.error(err.error.text ? err.error.text : "Something went wrong!", "Error");
                    this.loading = false;
                });
            }
        });

    }

    view(id: number) {
        this.router.navigate(['/company/profile/' + id]);
    }

    delete(id) {
        this.modalService.open(DeleteCompanyModal).result.then((result) => {
            if (result == 'Delete') {
                this.loading = true;
                this.companyService.deleteCompany(id).subscribe((resp: any) => {
                    if (resp.message) {
                        this.companies.some((company, index) => {
                            if (company.id == id) {
                                this.companies.splice(index, 1);
                                return true;
                            }
                        })
                        this.toastr.success("Company deleted!", "Success");
                        this.loading = false;
                    }
                }, err => {
                    console.log(err);
                    this.toastr.error("Something went wrong!", "Error");
                    this.loading = false;
                });
            }
        })

    }


}