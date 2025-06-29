import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contacts-card-view',
  templateUrl: './contacts-card-view.component.html',
  styleUrls: ['./contacts-card-view.component.css']
})
export class ContactsCardViewComponent implements OnInit {

  public contacts: Array<Contact>;

  @ViewChildren('card')
  public contactCards: QueryList<ContactCardComponent>;


  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(apiContacts => {
      this.contacts = apiContacts;
    },
      err => {
        console.log(err);

      });
  }

  removeContact(id) {
    console.log("Received in parent " + id);
    this.contactService.deleteContact(id).subscribe(
      resp => {
        const index = this.contacts.findIndex(contact => contact.id == id);
        this.contacts.splice(index, 1);
      }

    );
  }

  selectMultiple() {
    this.contactCards.forEach(contactCard => {
      contactCard.changeSelection();
    })

  }

}
