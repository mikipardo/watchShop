import { ServicioProductosService } from './../servicio-productos.service';
import { Pedido } from './../models/pedido';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  pedido:Pedido = {} as Pedido;

  constructor( private miServicio:ServicioProductosService,private router:Router) { }

  finalizarPedido(){
    alert("antes de mandar al server, aqui hay que validar");
    this.miServicio.registrarPedido(this.pedido).subscribe(res => (res=="ok")?this.pedidoOk():alert("no se pudo registrar tu pedido"));
  }


  pedidoOk(){//funcion solo para el operador ternario ya que solo puede devolver una linea
    alert("pedido realizado correctamente, puedes seguir comprando");
    this.router.navigate(["listado"]);
  }

}
