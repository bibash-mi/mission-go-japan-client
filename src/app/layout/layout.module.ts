import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './topnav/topnav.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        SidebarComponent,
        TopNavComponent
    ],
    exports: [
        TopNavComponent,
        SidebarComponent
    ]
})

export class LayoutModule { }
