import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [SharedAnimations]
})
export class UsersComponent implements OnInit {

  allSelected: boolean;
  users: any = [];
  filteredUsers: any = [];

  searchControl: FormControl = new FormControl();

  constructor(
    private customersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();

    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.search(value);
      });
  }

  getUsers() {
    this.customersService.getUsers().subscribe((users: any) => {
      this.filteredUsers = this.users = users.users;
      console.log("HEr eis customers ", users);
    })
  }

  addUser() {
    this.router.navigate(['/users/add-user']);
  }

  viewUser(id) {
    console.log("HEre is id : ", id);
    this.router.navigate(['/users/profile/' + id]);
  }

  search(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return this.filteredUsers = [...this.users];
    }

    const columns = Object.keys(this.users[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.users.filter(function (d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredUsers = rows;
  }

}