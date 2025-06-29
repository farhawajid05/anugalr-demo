import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  navigateToEdit(id) {
    this.router.navigate(['dashboard', { outlets: { editOutlet: ['edit', id]}}]);
  }

  constructor(private router: Router, private location: Location) { }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToDashboard(username) {
    this.router.navigate(['dashboard'], { queryParams: { 'username': username } });
  }

  navigateBack(){
    this.location.back();
  }
}
