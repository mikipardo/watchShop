import { Pedido } from './models/pedido';
import { RelojesCarrito } from './models/RelojesCarrito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './modelo/usuario';

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
      "cantidad": cantidad
    });
  }

  getRelojesCarrito():Observable<RelojesCarrito[]>{
    return this.http.get<[RelojesCarrito]>(this.ruta_server + "ObtenerRelojesCarritoController.php");
  }

  vaciarRelojesCarrito():Observable<string>{
    return this.http.delete<string>(this.ruta_server+"vaciarCarritoController.php");
  }

  registrarPedido(p:Pedido):Observable<string>{
    return this.http.post<string>(this.ruta_server+"registrarPedido.php",p);
  }

  getCurrentUser(nombre:String):Observable<Usuario> {
    console.log(nombre);

// se tienen que llamar igual los campos que se pasan por parametro, por lo menos en php que te has vuelto loco
    return this.http.get<Usuario>(this.ruta_server + "ObtenerPassUser.php?nombre="+nombre);
  }
}
