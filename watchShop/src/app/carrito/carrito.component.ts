import { RelojesCarrito } from './../models/RelojesCarrito';
import { Observable } from 'rxjs';
import { ServicioProductosService } from './../servicio-productos.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reloj } from '../models/Reloj';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  relojesCarrito:RelojesCarrito[]= {} as RelojesCarrito[] ;

  constructor(private httpo: HttpClient,private miServicio:ServicioProductosService ) {}

  ngOnInit():void {
  this.listarRelojesCarrito();
  }

  public listarRelojesCarrito() {
  this.miServicio.getRelojesCarrito().subscribe(relojes => this.relojesCarrito = relojes);

  }
  public vaciarCarrito() {
    this.miServicio.vaciarRelojesCarrito().subscribe( res => (res=="ok")?this.relojesCarrito=[]:alert("no se pudo vaciar el carrito") );
  }
}
