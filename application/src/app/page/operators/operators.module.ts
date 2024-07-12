import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [OperatorsComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
  ],
})
export class OperatorsModule {}
