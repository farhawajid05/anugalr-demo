import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list-view',
  templateUrl: './contacts-list-view.component.html',
  styleUrls: ['./contacts-list-view.component.css']
})
export class ContactsListViewComponent implements OnInit {

  public contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    })

  }

}
