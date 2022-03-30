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
}