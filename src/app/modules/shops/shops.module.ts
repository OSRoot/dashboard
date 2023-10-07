import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './components/shops/shops.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    ShopsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShopsModule { }
