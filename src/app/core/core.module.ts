import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { AppHttpInterceptor } from './http.interceptor';

@NgModule({
    providers: [
        AuthGuard,
        AuthInterceptor,
        AppHttpInterceptor
    ]
})

export class CoreModule { }
