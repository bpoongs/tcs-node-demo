import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const loginUrl = 'http://localhost:3000/login'
const registerUrl = 'http://localhost:3000/register'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(creds) {
    return this.http.post(loginUrl, creds)
  }

  logout() {

  }

  register(data) {
    return this.http.post(registerUrl, data)
  }

  getUser() {

  }
}
