import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoriesComponent } from './factories.component';
import { FactoryComponent } from './component/factory/factory.component';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [FactoriesComponent, FactoryComponent],
  imports: [CommonModule, TabViewModule, AvatarModule, BadgeModule],
})
export class FactoriesModule {}
