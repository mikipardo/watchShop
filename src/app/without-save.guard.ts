import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutSaveGuard implements CanActivate {
  numero:number=2;

constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.numero!=0){
        this.router.navigate(["login"]);
        return false;
      }else{
        this.router.navigate(["carrito"]);
        return true;
      }
  }

}
