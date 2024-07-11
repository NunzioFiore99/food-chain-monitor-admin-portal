import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { ProfileComponent } from './page/profile/profile.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DashboardModule } from './page/dashboard/dashboard.module';
import { FactoriesModule } from './page/factories/factories.module';
import { OperatorsModule } from './page/operators/operators.module';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FactoriesModule,
    OperatorsModule,
    TabMenuModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
