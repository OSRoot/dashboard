import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { SideNotificationsComponent } from './shared/components/side-notifications/side-notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNotificationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
