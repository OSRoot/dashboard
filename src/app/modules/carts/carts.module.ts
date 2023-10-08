import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartsComponent } from './components/carts/carts.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
    CartsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartsModule { }
