import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';
import { ContactEditDialogComponent } from '../contact-edit-dialog/contact-edit-dialog.component';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
    private router: RouterService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.dialog.open(ContactEditDialogComponent, {
        data: { 'id': id }
      }).afterClosed().subscribe(result => {
        this.router.navigateBack();
      })

    })

  }

}
