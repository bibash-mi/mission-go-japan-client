import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})

export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService, private router: Router) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(
                event => { },
                error => {
                    if (error instanceof HttpErrorResponse && error.status == 401) {
                        this.router.navigate(['/auth/signin']);
                    }
                }
            ));
    }

}