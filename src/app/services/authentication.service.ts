import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private auth_endpoint = 'http://localhost:9020/user-auth-service/api/v1/auth/login';
  constructor(private http: HttpClient, private backend: HttpBackend) {
      this.http = new HttpClient(backend);
   }

  authenticateUser(user) {
    let loginUser = {email: user.username, password: user.password};
    console.log(loginUser);
    return this.http.post(this.auth_endpoint, loginUser);
  }

  setBearerToken(token) {
    sessionStorage.setItem('token', token);
  }

  getBearerToken() {
    return sessionStorage.getItem('token');
  }

  // isAuthenticated() {
  //   return this.http.post('http://localhost:3000/auth/v1/isAuthenticated', {}, {
  //     headers: new HttpHeaders().set('Authorization', `Bearer ${this.getBearerToken()}`
  //   )
  // });

}