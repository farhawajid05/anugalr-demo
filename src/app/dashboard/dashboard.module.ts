import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { ContactsCardViewComponent } from './contacts-card-view/contacts-card-view.component';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactEditDialogComponent } from './contact-edit-dialog/contact-edit-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [DashboardComponent,
     NewContactComponent, ContactsCardViewComponent, 
     ContactsListViewComponent, ContactCardComponent, ContactEditorComponent,
      ContactEditDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ],
  entryComponents: [ContactEditDialogComponent]
})
export class DashboardModule { }
