import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './components/shops/shops.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './components/shop/shop.component';
// import { SharedModule } from 'src/app/shared/shared/shared.module';

import {register} from 'swiper/element/bundle';
register()

@NgModule({
  declarations: [
    ShopsComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopsModule { }
