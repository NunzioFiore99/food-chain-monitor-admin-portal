import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FactoryStatusComponent } from './component/factory-status/factory-status.component';

@NgModule({
  declarations: [DashboardComponent, FactoryStatusComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
