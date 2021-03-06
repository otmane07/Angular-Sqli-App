import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListeContactsComponent } from './Components/liste-contacts/liste-contacts.component';
import { AddContactComponent } from './Components/liste-contacts/add-contact/add-contact.component';
import { ContactsService } from './services/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
