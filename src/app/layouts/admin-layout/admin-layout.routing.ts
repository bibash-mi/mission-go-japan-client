import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { StudentsComponent } from '../../students/students.component';
import { SchoolsComponent } from '../../schools/schools.component';
import { CompaniesComponent } from '../../companies/companies.component';
import { LoginComponent } from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'schools', component: SchoolsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent }
];
