import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { SearchService } from '../../../../services/search.service';
import { AuthService } from '../../../../services/auth.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { NgbToast, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordModal } from 'src/app/views/modals/change-password/change-password.modal';

@Component({
    selector: 'app-header-sidebar-large',
    templateUrl: './header-sidebar-large.component.html',
    styleUrls: ['./header-sidebar-large.component.scss']
})
export class HeaderSidebarLargeComponent implements OnInit {

    notifications: any[];
    user: any = {};

    constructor(
        private navService: NavigationService,
        public searchService: SearchService,
        private authService: AuthService,
        public helper: HelperService,
        private auth: AuthService,
        private users: UsersService,
        private toastr: ToastrService,
        private modal: NgbModal
    ) {
        this.user = this.authService.getuser();
        console.log(this.user);
    }

    ngOnInit() {

    }

    toggelSidebar() {

        const state = this.navService.sidebarState;
        if (state.childnavOpen && state.sidenavOpen) {
            return state.childnavOpen = false;
        }
        if (!state.childnavOpen && state.sidenavOpen) {
            return state.sidenavOpen = false;
        }
        // item has child items
        if (!state.sidenavOpen && !state.childnavOpen
            && this.navService.selectedItem.type === 'dropDown') {
            state.sidenavOpen = true;
            setTimeout(() => {
                state.childnavOpen = true;
            }, 50);
        }
        // item has no child items
        if (!state.sidenavOpen && !state.childnavOpen) {
            state.sidenavOpen = true;
        }
    }

    changePassword() {
        let changePassword = this.modal.open(ChangePasswordModal, { size: 'large', centered: true });
        changePassword.result.then(result => {
            if (result.hasOwnProperty('password')) {
                this.users.changePassword(result.password).subscribe((resp) => {
                    this.toastr.success("Password change successful.", "success");
                }, (err) => {
                    this.toastr.error("Password change failed. Please try again later.", "error");
                });
            }
        })
    }

    signout() {
        this.auth.signout();
    }

}
