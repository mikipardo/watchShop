import { ServicioProductosService } from './../servicio-productos.service';
import { Pedido } from './../models/pedido';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  pedido: Pedido = {} as Pedido;

  nombreOk = true;
  movil = true;
  cp = true;
  allCheck = false;
  constructor(private miServicio: ServicioProductosService, private router: Router) { }

  finalizarPedido() {
    if (this.validarForm()) {

      this.miServicio.registrarPedido(this.pedido).subscribe(res => (res == "ok") ? this.pedidoOk() :   alert("no se pudo registrar tu pedido"));
    }
  }


  pedidoOk() {//funcion solo para el operador ternario ya que solo puede devolver una linea

    this.router.navigate(["listado"]);
  }

  validarForm(): boolean {
    if (this.checkName() && this.checkCP()&&this.checkTelefon()) {

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
  checkTelefon(): boolean {
    if (/^[0-9]{7,12}$/.test(this.pedido.telefono)) {

      this.movil = true;
    } else if (this.movil === undefined) {
      this.movil = false;
    } else {

      this.movil = false;
    }
    return this.movil;
  }

  checkCP(): boolean {
    if (/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(this.pedido.cp)) {

      this.cp = true;
    } else if (this.cp === undefined) {
      this.cp = false;
    } else {

      this.cp = false;
    }
    return this.cp;
  }



}
