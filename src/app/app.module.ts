import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HttpClient, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './shared/services/http.interceptor';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { AppFormsModule } from './views/forms/forms.module';
import { ModalModule } from './views/modals/modal.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
        AppRoutingModule,
        AppFormsModule
    ],
    providers: [HttpClient, HttpClientModule, HttpClientJsonpModule, {
        provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
    }, {
            provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
