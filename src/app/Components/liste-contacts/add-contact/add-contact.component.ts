import { Component, Input, OnInit } from '@angular/core';
import Contact from 'src/app/Models/Contact';
import { ContactsService } from '../../../services/contacts.service';
import { Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Input() listeContacts :any[]=[];
  @Output() addEvent = new EventEmitter<Contact>();

  contact : Contact ={
    id:80,
    name:"",
    phone:""
  }
  constructor() { }

  ngOnInit(): void {
   
  }

  activerAjout = ()=>{
    this.addEvent.emit(this.contact)
  }


}
