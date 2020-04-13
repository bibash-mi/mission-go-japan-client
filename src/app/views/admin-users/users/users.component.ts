import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [SharedAnimations]
})
export class UsersComponent implements OnInit {

  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  products: any[] = [
    {
      "photo": "",
      "name": "Bibash",
      "price": 24,
      "badge": ""
    }
  ];

  constructor(
    private dl: DataLayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dl.getProducts()
      .subscribe((products: any[]) => {
        this.products = products;
      });
  }

  selectAll(e) {
    this.products = this.products.map(p => {
      p.isSelected = this.allSelected;
      return p;
    });
  }

  addUser() {
    this.router.navigate(['/users/add-user']);
  }

}