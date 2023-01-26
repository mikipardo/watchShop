import { Usuario } from './modelo/usuario';
import { SharedService } from './modelo/globales';
import { LoginComponent } from './login/login.component';
import { ServicioProductosService } from './servicio-productos.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WithoutSaveGuard implements CanActivate {
  userToken: string="-1";
  passToken: string="-1";


  usuarioActual:Usuario={} as Usuario;



constructor(private router:Router,private miServicio:ServicioProductosService,private tokenGlobal:SharedService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {





if(false){
  this.router.navigate(["home"]);
  return false;
}else{
  this.router.navigate(["carrito"]);
  return true;
}


  }

}
