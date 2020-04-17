import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;

  constructor(private router: Router, private http: HttpClient, private config: ConfigService) {
    this.checkAuth();
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  checkAuth() {
    return moment().isBefore(this.getExpiration());
  }

  getuser() {
    return of({});
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  validateToken(token: String) {
    return this.http.get(this.config.getAPIRoot() + '/auth/reset/' + token);
  }

  signin(credentials) {
    console.log(credentials);
    this.authenticated = true;
    return this.http.post(this.config.getAPIRoot() + '/auth/signin', { email: credentials.email, password: credentials.password }).pipe(
      tap((res) => {
        console.log("Here is response : ", res);
        if (res['token']) {
          this.setSession(res['token']);
          return res;
        }
      })
    );
  }

  isAdminUser() {
    let jwt = localStorage.getItem("id_token");
    if (jwt != null) {
      let token = jwt.split('.');
      let user = JSON.parse(atob(token[1]));
      return user.hasOwnProperty("admin") && user.admin;
    }
    return false;
  }

  getJWT() {
    return localStorage.getItem("id_token");
  }

  setSession(jwt) {
    // const expiresAt = moment().add(authResult.expiresIn,'second');
    const expiresAt = moment().add(30, 'day');

    localStorage.setItem('id_token', jwt);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  signout() {
    this.authenticated = false;
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("account");
    this.router.navigate(['/auth/signin']);
  }
}
