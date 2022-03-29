import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListeContactsComponent } from './Components/liste-contacts/liste-contacts.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
