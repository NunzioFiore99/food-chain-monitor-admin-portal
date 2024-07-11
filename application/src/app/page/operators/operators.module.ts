import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { OperatorComponent } from './component/operator/operator.component';

@NgModule({
  declarations: [OperatorsComponent, OperatorComponent],
  imports: [CommonModule],
})
export class OperatorsModule {}
