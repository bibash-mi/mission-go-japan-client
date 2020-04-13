import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  show: boolean = false;
  account: any = {};

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/login' || event.urlAfterRedirects == '/login' ||
          event.url == '/reset/*' || event.urlAfterRedirects == '/reset/*'
          // || (localStorage.getItem('id_token') == null && localStorage.getItem('account')) == null
        ) {
          this.show = false;
        } else this.show = true;
      }
    })
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
