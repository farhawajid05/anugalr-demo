import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform: FormGroup;
  public message: string;

  constructor(private authService: AuthenticationService, private router: RouterService) {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  get username() {
    return this.loginform.get('username');
  }


  get password() {
    return this.loginform.get('password');
  }

  login() {
    this.authService.authenticateUser(this.loginform.value).subscribe(
      data => {
        this.authService.setBearerToken(data['token']);
        // navigate to NewContactComponent
        this.router.navigateToDashboard(this.loginform.value.username);
      },
      err => {
        if (err.status == 403) {
          this.message = err.error.message;
        } else {
          this.message = "Server error";
        }

      }

    )
  }
}