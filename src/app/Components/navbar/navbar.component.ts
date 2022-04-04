import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showForm:boolean=false;
  @Output() updateEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  showFormUpdateAdd = ()=>{
    this.showForm=true;
    this.updateEvent.emit(this.showForm);
  }
  showFormUpdateContacts =()=>{
    this.showForm=false;
    this.updateEvent.emit(this.showForm);
  }

}
