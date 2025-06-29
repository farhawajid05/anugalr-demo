import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Contact } from 'src/app/model/contact';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input()
  public contact: Contact;

  @Output()
  public deleteEvent = new EventEmitter();

  public selectMultiple: boolean = false;

  constructor(private router: RouterService) { }

  ngOnInit() {
  }

  deleteContact() {
    console.log("From child " + this.contact.id);
    this.deleteEvent.emit(this.contact.id);
  }

  editContact() {
    this.router.navigateToEdit(this.contact.id);
  }

  changeSelection(){
    this.selectMultiple = !this.selectMultiple;
  }

}
