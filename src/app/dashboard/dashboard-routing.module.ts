import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactsCardViewComponent } from './contacts-card-view/contacts-card-view.component';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'cards', component: ContactsCardViewComponent },
      { path: 'list', component: ContactsListViewComponent },
      { path: 'edit/:id', component: ContactEditorComponent, outlet: 'editOutlet' },
      { path: '', redirectTo: 'cards', pathMatch: 'full' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
