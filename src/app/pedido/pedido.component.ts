import { ServicioProductosService } from './../servicio-productos.service';
import { Pedido } from './../models/pedido';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  pedido: Pedido = {} as Pedido;
  nombreOk = true;
  cp = true;
  allCheck = false;
  constructor(private miServicio: ServicioProductosService, private router: Router) { }

  finalizarPedido() {
    if (this.validarForm()) {
      alert("pedido.nombre: " + this.pedido.nombre);
      this.miServicio.registrarPedido(this.pedido).subscribe(res => (res == "ok") ? this.pedidoOk() : alert("no se pudo registrar tu pedido"));
    }
  }


  pedidoOk() {//funcion solo para el operador ternario ya que solo puede devolver una linea
    alert("pedido realizado correctamente, puedes seguir comprando");
    this.router.navigate(["listado"]);
  }

  validarForm(): boolean {
    if (this.checkName() && this.checkCP()) {
      this.allCheck = true;
    }
    return this.allCheck;
  }//end validarForm


  checkName(): boolean {

    if (this.pedido.nombre === undefined) {
      this.nombreOk = false;
      return false;
    }
    if (/^[a-zA-Z ]{3,30}$/.test(this.pedido.nombre)) {
      this.nombreOk = true;
    } else {
      this.nombreOk = false;
      return false;
    }
    return true;
  }


  checkCP(): boolean {
    if (/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(this.pedido.cp)) {

      alert("entro"+this.pedido.cp)
      this.cp = true;
    } else if (this.cp === undefined) {
      this.cp = false;
    } else {
      alert("cali"+this.pedido.cp)
      this.cp = false;
    }
    return this.cp;
  }
}
