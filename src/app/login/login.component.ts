import { Component } from '@angular/core';
import { LoginOkGuard } from '../login-ok.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string="";
  userPass:string=""


  constructor(private logGuard:LoginOkGuard){}

  sendPassAndUser():string{
  return this.userPass;
  }

  sendNameAndUser():string{
    return this.userName;
    }
}
