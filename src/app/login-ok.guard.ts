import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioProductosService } from './servicio-productos.service';

@Injectable({
  providedIn: 'root'
})
export class LoginOkGuard implements CanActivate {

  passData:String="";

  constructor(private router:Router,private passLog:String,private user:String,private miServicio:ServicioProductosService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.miServicio.getPassUser(this.user).subscribe(pase => this.passData = pase);

      return true;
  }

  logear(name:string,pass:string):boolean{

    if(this.passData!=this.passLog){
      this.router.navigate(["login"]);
      return false;
    }else{
      this.router.navigate(["carrito"]);
      return true;
    }
  }

}
