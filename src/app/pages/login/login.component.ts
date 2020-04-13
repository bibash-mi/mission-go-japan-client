import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin: boolean = true;
  loading: boolean = false;
  user: any = {};
  errorMessage: String = "";
  resetEmail: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendResetEmail() {
    console.log(" This is a demo");
  }

  login() {
    console.log("this is login");
    this.auth.login(this.user.email, this.user.password).subscribe((resp) => {
      this.loading = false;
      this.router.navigateByUrl('/dashboard');
    }, err => {
      if (err.error.error) this.errorMessage = err.error.error;
      else this.errorMessage = "Something went wrong. Please try again later.";
      this.loading = false;
    });
  }




}
