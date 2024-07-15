import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FactoryStatusComponent } from './component/factory-status/factory-status.component';
import { MessageBoxComponent } from './component/message-box/message-box.component';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    DashboardComponent,
    FactoryStatusComponent,
    MessageBoxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    InputTextModule,
  ],
})
export class DashboardModule {}
