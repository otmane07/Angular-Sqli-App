import { Component, OnInit } from '@angular/core';
import Contact from 'src/app/Models/Contact';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contact : Contact ={
    nom:"",
    tel:""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
