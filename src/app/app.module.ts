import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ModelModule } from './model/model.module';
import { ServiceModule } from './services/service.module';
import { HttpClient, HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './core/auth.interceptor';
import { AppHttpInterceptor } from './core/http.interceptor';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ServiceModule,
    LayoutModule,
    ModelModule,
    FormsModule
  ],
  providers: [HttpClient, HttpClientModule, HttpClientJsonpModule, {
    provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
  }, {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
