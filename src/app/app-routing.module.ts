import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { LocationsComponent } from './modules/locations/components/locations/locations.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ShopsComponent } from './modules/shops/components/shops/shops.component';
import { ProductComponent } from './modules/products/components/product/product.component';
import { StatisticsComponent } from './modules/statistics/components/statistics/statistics.component';
import { ContactsComponent } from './modules/contacts/components/contacts/contacts.component';
import { HelpComponent } from './modules/help/components/help/help.component';
import { ContactComponent } from './modules/contacts/components/contact/contact.component';
import { ProductsComponent } from './modules/products/components/products/products.component';
import { ShopComponent } from './modules/shops/components/shop/shop.component';

const routes: Routes = [
  {
    path:'',
    // loadChildren:()=> import('./modules/dashboard/dashboard.module').then((m)=> m.DashboardModule),
    component:DashboardComponent,
  },
  {
    path:'locations',
    component:LocationsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'shops',
    component:ShopsComponent
  },
  {
    path:'shop/:id',
    component:ShopComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    data:{Animation:'enterLeavePage'}

  },
  {
    path:'product/:id',
    component:ProductComponent,
    data:{Animation:'openClosePage'}
  },

  {
    path:'statistics',
    component:StatisticsComponent
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:'contact/:id',
    component:ContactComponent
  },
  {
    path:'help',
    component:HelpComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
