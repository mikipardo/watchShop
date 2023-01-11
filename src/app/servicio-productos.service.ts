import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Reloj } from './modelo/Reloj';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor(private http:HttpClient) { }

  public obtenerRelojes():Observable<Reloj[]>{

    return this.http.get<Reloj[]>("server/controller.php");
  }

}
