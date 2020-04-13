import { Injectable, isDevMode } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap, mergeMap } from "rxjs/operators";
import { Router } from '@angular/router';

import * as moment from 'moment';
import { ConfigService } from './config.service';

@Injectable()
export class AuthService {

    private loggedInStatus = false;

    constructor(private router: Router, private http: HttpClient, private config: ConfigService) {
    }

    login(email: String, password: String) {
        return this.http.post(this.config.getAPIRoot() + '/auth/login', { username: email, password: password }).pipe(
            tap((res) => {
                console.log("Here is response : ", res);
                // if (res['token']) {
                //     this.setSession(res['token']);
                //     return res;
                // }
            })
        );
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("account");
        this.router.navigate(['/login']);
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    // isAdminUser() {
    //     let jwt = localStorage.getItem("id_token");
    //     if (jwt != null) {
    //         let token = jwt.split('.');
    //         let user = JSON.parse(atob(token[1]));
    //         return user.hasOwnProperty("admin") && user.admin;
    //     }
    //     return false;
    // }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    resetPassword(email: string) {
        return this.http.post(this.config.getAPIRoot() + '/auth/reset', { email: email }, { observe: 'response' });
    }

    validateToken(token: String) {
        return this.http.get(this.config.getAPIRoot() + '/auth/reset/' + token);
    }
    changePassword(password: String, confirm_password: String, token: String) {
        return this.http.post(this.config.getAPIRoot() + '/auth/reset/' + token, { password: password, confirm_password: confirm_password }, { observe: 'response' });
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
}