import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.scss']
})
export class ListeContactsComponent implements OnInit {
  contacts :any[]= [];
  constructor(private contactService : ContactsService) { }

  ngOnInit(): void {
    this.contactService.getContact().subscribe(data => {
      // this.contacts.push(data);
      this.contacts = [...this.contacts ,data]
      // console.log("this.contacts",this.contacts)
      // console.log("this.contacts.length",this.contacts[0].length)
    })
  }

}
