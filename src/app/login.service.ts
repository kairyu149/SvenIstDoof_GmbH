import { Injectable } from '@angular/core';
import { ApiCommunicatorService } from './api-communicator.service';
import { Observable } from 'rxjs/Rx';
import {Headers, Http, Response} from '@angular/http';

@Injectable()
export class LoginService {
  private loggedIn = false;
  private matchPassword = false;

  constructor(private apiCommunicatorService:ApiCommunicatorService) {
    this.loggedIn = !!sessionStorage.getItem('authHeader');
    if(!this.loggedIn){
      this.loggedIn = !!localStorage.getItem('authHeader');
    }
  }

  login(username, password, savedLogin) {
    let credentials = {"username": username, "password": password};

    return this.apiCommunicatorService.putNoHeader("/login", credentials)
      .map((res: Array<Object>) => {
        let token = res["token"];
        var authHeader = new Headers();
        authHeader.append('Authorization', token);
        if (savedLogin) {
          localStorage.setItem('authHeader', JSON.stringify(authHeader));
          localStorage.setItem('username', username);
        } else {
          sessionStorage.setItem('authHeader', JSON.stringify(authHeader));
          sessionStorage.setItem('username', username);
        }
        return this.loggedIn = true;
      }).catch(e => {if (e.status >= 227) {return Observable.throw('Error')}});
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
}

}
