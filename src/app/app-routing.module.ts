import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './Components/liste-contacts/add-contact/add-contact.component';
import { ListeContactsComponent } from './Components/liste-contacts/liste-contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ListeContactsComponent },
  { path: 'addContact', component: AddContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }