import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [OperatorsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    MultiSelectModule,
    AvatarModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
  ],
})
export class OperatorsModule {}
