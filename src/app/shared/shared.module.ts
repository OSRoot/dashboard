import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LastFewTransactionsComponent } from './components/last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from './components/sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './components/sales-by-month/sales-by-month.component';
import { TopThreeProductsComponent } from './components/top-three-products/top-three-products.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
import { ChartModule } from 'angular-highcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    TopThreeProductsComponent,
    TopWidgetComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    TopThreeProductsComponent,
    TopWidgetComponent
  ]
})
export class SharedModule { }
