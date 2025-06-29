import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit-dialog',
  templateUrl: './contact-edit-dialog.component.html',
  styleUrls: ['./contact-edit-dialog.component.css']
})
export class ContactEditDialogComponent implements OnInit {

  public contact: Contact;

  constructor(public dialogRef: MatDialogRef<ContactEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private contactService: ContactService) { }



  ngOnInit() {
    this.contact = this.contactService.getContactById(this.data.id);
  }


  saveContact(form) {
      this.contactService.saveContact(this.contact).subscribe(contact =>{
        this.dialogRef.close();
      })
  }

}
