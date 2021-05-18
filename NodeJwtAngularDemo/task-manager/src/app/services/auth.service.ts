import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storeUser(user){
      sessionStorage.setItem("user", JSON.stringify(user));
  }

  retrieveUser(){
      return JSON.parse(sessionStorage.getItem("user"));
  }

  removeUser(){
      sessionStorage.removeItem("user");
  }
  
}
