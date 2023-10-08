import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './components/help/help.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HelpModule { }
