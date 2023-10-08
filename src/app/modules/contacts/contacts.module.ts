import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContactsModule { }
