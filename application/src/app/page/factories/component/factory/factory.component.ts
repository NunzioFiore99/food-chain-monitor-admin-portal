import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.scss',
})
export class FactoryComponent {
  @Input() factory: any;
}
