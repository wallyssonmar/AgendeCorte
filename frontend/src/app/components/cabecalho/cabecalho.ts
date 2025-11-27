import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  currentUrl = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.url;
      });
  }

  isActive(route: string) {
    return this.currentUrl === route;
  }
}
