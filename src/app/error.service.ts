import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";

@Injectable()
export class ErrorService {
  private error = {
    "show": false,
    "text": "test"
  }

  private success = {
    "show": false,
    "text": "text",
    "logout": false
  }

  private gear = {
    "show": false,
    "text": "text"
  }

  constructor(private router: Router, private loginService: LoginService) { }

  setSuccessLogout(){
    this.success.logout = true;
  }

  throwError(text){
    this.error.text = text;
    this.error.show = true;
  }
  resetError(){
    this.error.text = "";
    this.error.show = false;
  }

  throwSuccess(text){
    this.success.text = text;
    this.success.show = true;
  }
  resetSuccess(){
    this.success.text = "";
    this.success.show = false;
    this.router.navigate(["../login-seite"]);
    if(this.success.logout){
      this.loginService.logout();
    }
  }

  throwGear(text){
    this.gear.text = text;
    this.gear.show = true;
  }
  resetGear(){
    this.gear.text = "";
    this.gear.show = false;
  }
}
