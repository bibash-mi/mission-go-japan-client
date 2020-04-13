import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Moment } from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelSubscriptionModal } from '../user-modal/cancel-subscription/cancel-subscription.modal';
import { GenerateNewAPIKeyModal } from '../user-modal/generate-new-key/generate-key.modal';
import { ResetQuotaModal } from '../user-modal/reset-quota/reset-quota.modal';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any = {};
  cache: any = {};
  invoices: any = [];
  showAPI: boolean = false;
  user_id: string;
  account_loading: boolean = true;

  constructor(
    private usersService: UsersService,
    public helper: HelperService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.user_id = params['id'];
        this.getUserData(this.user_id);
        this.getInvoiceData(this.user_id);
      }
    });
  }

  getUserData(id) {
    this.usersService.getUserDetail(id).subscribe((data: any) => {
      this.user = data.user;
      this.cache = data.cache;
      this.account_loading = false;
    })
  }

  getInvoiceData(id) {
    this.usersService.getInvoiceData(id).subscribe((data: any) => {
      this.invoices = data.invoices;
    })
  }


  generateAPIKey() {
    let generate_modal = this.modalService.open(GenerateNewAPIKeyModal, { centered: true });
    generate_modal.result.then((result) => {
      if (result == 'generate') {
        this.account_loading = true;
        this.usersService.generateNewApiKey(this.user_id).subscribe((resp: any) => {
          this.user.api_key = resp.key;
          this.account_loading = false;
        });
      }
    })
  }

  resetQuota() {
    let generate_modal = this.modalService.open(ResetQuotaModal, { centered: true });
    generate_modal.result.then((result) => {
      if (result == 'reset') {
        this.account_loading = true;
        this.usersService.resetQuota(this.user_id).subscribe((resp: any) => {
          console.log(resp);
          this.account_loading = false;
        });
      }
    })
  }

  cancelSubscription() {
    let cancel_modal = this.modalService.open(CancelSubscriptionModal, { centered: true });
    cancel_modal.result.then((result) => {
      if (result) {
        this.usersService.cancelSubscription(this.user_id);
      }
    })
  }
}