import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Sqli-App';
  displayForm = false;
  updateDisplayForm = (sF:boolean)=>{
    this.displayForm = sF;
  }
}
