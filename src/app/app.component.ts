import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio01_angular';

  constructor(private route:Router){}

  //https://stackoverflow.com/questions/68651691/show-splash-screen-only-once-on-app-load-using-angular-pwa

  ngOnInit():void{
   // this.route.navigate(["home"]);
  }
}
