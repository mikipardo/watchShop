import { WithoutSaveGuard } from './../without-save.guard';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string="";
  userPass:string=""


  constructor(){}

  dsparador(){

    alert(this.getNameAndUser());
    alert(this.getPassAndUser());

  }

  getPassAndUser():string{
  return this.userPass;
  }

  getNameAndUser():string{
    return this.userName;
    }
}
