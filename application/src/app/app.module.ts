import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, TabMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
