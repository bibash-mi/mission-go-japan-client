import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { AuthGuard } from 'src/app/shared/services/auth.gaurd';

const routes: Routes = [
    {
        path: '',
        component: CompanyComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile/:id',
        component: CompanyProfileComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }