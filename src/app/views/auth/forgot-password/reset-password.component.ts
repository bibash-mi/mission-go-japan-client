import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [SharedAnimations]
})
export class ResetPasswordComponent implements OnInit {

  loading: boolean = false;
  user: any = {};
  token: string = "";
  validationError: boolean = false;

  subscriptions: any = [];

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loading = true;
    //Getting the token from url
    this.subscriptions.push(this.route.paramMap.subscribe(params => {
      this.token = params.get('token');
      console.log(this.token);
      this.auth.validateToken(this.token).subscribe(resp => {
        this.loading = false;
      }, err => {
        this.loading = false;
        this.validationError = true;
        // TODO: ERROR management 
      });
    }));
  }

  resetPassword(users) {
    if (this.user.newPassword.length < 7) {
      this.errorMessage("Password must be longer than 7 character.");
      return;
    } else if (!this.hasNumeric(users.newPassword)) {
      this.errorMessage("Password must have atleast one numeric character.");
      return;
    } else if (!this.hasUpperCase(users.newPassword)) {
      this.errorMessage("Password must have atleast one uppercase character.");
      return;
    } else if (!this.hasLowerCase(users.newPassword)) {
      this.errorMessage("Password must have atleast one lowercase character.");
      return;
    } else if (this.user.newPassword != this.user.confirmPassword) {
      this.errorMessage("New password does not match with Confirm password.");
      return;
    }
  }

  errorMessage(error) {
    this.toastr.error(error, "Error", { timeOut: 3000, progressBar: true, positionClass: "toast-bottom-center" });
  }

  hasNumeric(str) {
    return (/[0-9]/.test(str));
  }

  hasUpperCase(str) {
    return (/[A-Z]/.test(str));
  }

  hasLowerCase(str) {
    return (/[a-z]/.test(str));
  }


}
