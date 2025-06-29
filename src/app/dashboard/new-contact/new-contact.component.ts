import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit{
  public newContact: Contact;
  public message: string;

  @ViewChild('expPanel', { static: false })
  private expansionPanel: MatExpansionPanel;


  constructor(private contactService: ContactService, private snackBar: MatSnackBar) {
    this.newContact = new Contact();

  }


  ngOnInit() {
  }

  addContact(contactform: NgForm) {
    this.contactService.addContact(this.newContact).subscribe(() => {
      // this.contacts.push(this.newContact);
      // this.message ="Contact Added"
      this.snackBar.open('Contact added', 'ok', { duration: 5000 });
      this.expansionPanel.close();
    });
    contactform.resetForm();



  }

}
