import { Component } from '@angular/core';

@Component({
  selector: 'app-factory-status',
  templateUrl: './factory-status.component.html',
  styleUrl: './factory-status.component.scss',
})
export class FactoryStatusComponent {
  public logoFactory: string =
    document.location.origin + '/assets/img/logo-factory.png';
}
