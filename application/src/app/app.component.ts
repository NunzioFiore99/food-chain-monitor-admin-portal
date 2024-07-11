import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public logoPath: string =
    document.location.origin + '/assets/img/supply-chain-management.png';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Factories', icon: 'pi pi-warehouse', routerLink: '/factories' },
      { label: 'Operators', icon: 'pi pi-users', routerLink: '/operators' },
      { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    ];
  }
}
