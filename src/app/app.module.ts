import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShopsModule } from './modules/shops/shops.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LocationsModule } from './modules/locations/locations.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { ProductsModule } from './modules/products/products.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { HelpModule } from './modules/help/help.module';
import { CartsModule } from './modules/carts/carts.module';
import { IonicModule } from '@ionic/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { customAnimation } from './core/scripts/script';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShopsModule,
    DashboardModule,
    LocationsModule,
    HttpClientModule,
    StatisticsModule,
    ProductsModule,
    ContactsModule,
    HelpModule,
    CartsModule,
    IonicModule.forRoot({navAnimation:customAnimation},),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
