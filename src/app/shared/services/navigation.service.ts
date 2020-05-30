import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    selectedItem: IMenuItem;

    constructor(
        private auth: AuthService
    ) {
    }

    defaultMenu: IMenuItem[] = [
        {
            name: 'Dashboard',
            description: 'This is home of the app.',
            type: 'link',
            icon: 'i-Bar-Chart',
        },
        {
            name: 'Students',
            description: 'This is students page.',
            type: 'link',
            icon: 'i-Business-ManWoman',
            state: '/students/'
        },
        {
            name: 'Schools',
            description: 'This is Schools page.',
            type: 'link',
            icon: 'i-University1',
            state: '/schools/'
        }
    ];

    schoolMenu: IMenuItem[] = [
        {
            name: 'Dashboard',
            description: 'This is home of the app.',
            type: 'link',
            icon: 'i-Bar-Chart',
        },
        {
            name: 'Students',
            description: 'This is students page.',
            type: 'link',
            icon: 'i-Business-ManWoman',
            state: '/students/'
        },
    ];

    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.auth.isAdminUser() ? this.defaultMenu : this.schoolMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //     if(this.auth.isAdminUser)
    //   switch (this.auth.isAdminUser) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }

}
