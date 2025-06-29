import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Contact } from '../model/contact';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contacts: Array<Contact> = [];
  public contactsSubject: BehaviorSubject<Array<Contact>>;

  private contact_api_endpoint = 'http://localhost:9020/contact-service/api/v1/contacts';

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    this.getContactsFromServer();
    this.contactsSubject = new BehaviorSubject(this.contacts);
  }

  // getContacts(): Observable<Contact[]> {
  //   return this.httpClient.get<Contact[]>(this.contact_api_endpoint);
  // }

  getContactsFromServer() {
    return this.httpClient.get<Contact[]>(this.contact_api_endpoint)
      .subscribe(apiContacts => {
        this.contacts = apiContacts;
        this.contactsSubject.next(this.contacts);
      })
  }

  getContacts(): Observable<Contact[]> {
    return this.contactsSubject;
  }

  addContact(newContact: Contact): Observable<Contact> {
    console.log("adding contact", newContact);

    
    return this.httpClient.post<Contact>(this.contact_api_endpoint, newContact)
      .pipe(tap(contact => {
        console.log("got resp", contact);
        
        this.contacts.push(contact);
        this.contactsSubject.next(this.contacts);
      }));
  }

  deleteContact(id): Observable<any> {
    return this.httpClient.delete(`${this.contact_api_endpoint}/${id}`);
  }

  getContactById(id) {
    const editContact = this.contacts.find(contact => contact.id == id);
    return Object.assign({}, editContact);
  }

  saveContact(contact: Contact) {
    return this.httpClient.put<Contact>(`${this.contact_api_endpoint}/${contact.id}`, contact)
      .pipe(tap(editedContact => {
        const existingContact = this.contacts.find(cont => contact.id == cont.id);
        Object.assign(existingContact, editedContact);
        this.contactsSubject.next(this.contacts);
      }))
  }

}
