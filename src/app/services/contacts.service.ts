import  Contact  from 'src/app/Models/Contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private url="https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient : HttpClient) { }
  getContact = ()=>{
    return this.httpClient.get(this.url)
  }
  addContact(c:Contact) {
    return this.httpClient.post(this.url,c)
  }
  deleteContact(id:number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
