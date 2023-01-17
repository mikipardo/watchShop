import { RelojesCarrito } from './models/RelojesCarrito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Reloj } from './models/Reloj';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioProductosService {
  ruta_server = "/server/";

  constructor(private http: HttpClient) {}

   obtenerRelojes(): Observable<Reloj[]> {
    return this.http.get<Reloj[]>(
      this.ruta_server + "ObtenerRelojesController.php"
    );
  }


   obtenerRelojPorId(id: number): Observable<Reloj> {
    //pasamos por la url la id de reloj. luego la recibimos con $_GET de php en el controller
    //cuidado con las rutas
    return this.http.get<Reloj>(this.ruta_server + "ObtenerRelojesPorIdController.php?id="+id);
  }

   agregarAlCarrito(idReloj: number, cantidad: number): Observable<any> {
    return this.http.post<any>(this.ruta_server + "AgregarProductoCarritoController.php", {
      "id": idReloj,
      "cantidad": 1
    });
  }

  getRelojesCarrito():Observable<RelojesCarrito[]>{
    return this.http.get<[RelojesCarrito]>(this.ruta_server + "ObtenerRelojesCarritoController.php");
  }

  vaciarRelojesCarrito():Observable<string>{
    return this.http.delete<string>(this.ruta_server+"vaciarCarritoController.php");
  }
}
