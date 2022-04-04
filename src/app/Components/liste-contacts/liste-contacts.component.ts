import  Contact  from 'src/app/Models/Contact';
import { ContactsService } from './../../services/contacts.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.scss']
})
export class ListeContactsComponent implements OnInit {
  contacts :any[]= [];
  @Input() showForm:boolean=false;
  constructor(private contactService : ContactsService ) { }

  ngOnInit(): void {
    this.contactService.getContact().subscribe(data => {
      this.contacts = [...this.contacts ,data]
    })
  }
  addParentEvent = (contact :Contact)=>{
    contact.id=this.contacts[0].length+1;
    this.contactService.addContact(contact).subscribe(res => {
      this.contacts[0]=[res,...this.contacts[0]]
    })
  }

}
