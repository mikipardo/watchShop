import { ServicioProductosService } from './../servicio-productos.service';
import { Pedido } from './../models/pedido';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent {
  pedido: Pedido = {} as Pedido;

  nombreOk: boolean = true;
  direccionSpan: boolean = true;
  movilSpan: boolean = true;
  cpSpan: boolean = true;
  fecha: boolean = true;
  horario: boolean = true;
  tarjetas: boolean = true;

  allCheck: boolean = false;

  constructor(
    private miServicio: ServicioProductosService,
    private router: Router
  ) {}

  finalizarPedido() {
    if (this.validarForm()) {
      this.miServicio
        .registrarPedido(this.pedido)
        .subscribe((res) =>
          res == 'ok'
            ? this.pedidoOk()
            : alert('no se pudo registrar tu pedido')
        );
    }
  }

  pedidoOk() {
    //funcion solo para el operador ternario ya que solo puede devolver una linea
    this.sweetAlertCheck('Pedido Completado');

    this.router.navigate(['listado']);
  }

  validarForm(): boolean {
    if (
      this.checkName() &&
      this.checkCP() &&
      this.checkTelefono() &&
      this.variosCampos() &&
      this.checkCard()

    ) {
      this.allCheck = true;
    }
    return this.allCheck;
  } //end validarForm

  variosCampos(): boolean {
    if (this.pedido.fecha === undefined) {
      //alert("debes insertar un nombre");
      this.fecha = false;
      return false;
    } else {
      this.fecha = true;
    }
    if (this.pedido.direccion === undefined) {
      //alert("debes insertar un nombre");
      this.direccionSpan = false;
      return false;
    } else {
      this.direccionSpan = true;
    }
    if (this.pedido.horario === undefined) {
      //alert("debes insertar un nombre");
      this.horario = false;
      return false;
    } else {
      this.horario = true;
    }
    return true;
  }

  checkCard():boolean {
    //Visa

    if (this.pedido.tarjeta === undefined) {
      //alert("debes insertar un nombre");
      this.tarjetas = false;
      return false;
    }
    if (
      /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/.test(this.pedido.tarjeta) ||
      /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/.test(this.pedido.tarjeta)
    ) {
      //alert("nombre ok");
      this.tarjetas = true;
    } else {
      // alert("nombre debe tener de 3 a 30 caracteres, solo letras y espacios");
      this.tarjetas = false;
      return false;
    }
    //fin validacion nombre
    //if/else por cada campo

    return true;
  }

  checkName(): boolean {
    if (this.pedido.nombre === undefined) {
      //alert("debes insertar un nombre");
      this.nombreOk = false;
      return false;
    }
    if (/^[a-zA-Z ]{3,30}$/.test(this.pedido.nombre)) {
      //alert("nombre ok");
      this.nombreOk = true;
    } else {
      // alert("nombre debe tener de 3 a 30 caracteres, solo letras y espacios");
      this.nombreOk = false;
      return false;
    }
    //fin validacion nombre
    //if/else por cada campo

    return true;
  }
  checkTelefono(): boolean {
    if (this.pedido.telefono === undefined) {
      //alert("debes insertar un nombre");
      this.movilSpan = false;
      return false;
    }
    if (/^[0-9]{7,12}$/.test(this.pedido.telefono)) {
      //alert("nombre ok");
      this.movilSpan = true;
    } else {
      // alert("nombre debe tener de 3 a 30 caracteres, solo letras y espacios");
      this.movilSpan = false;
      return false;
    }
    //fin validacion nombre
    //if/else por cada campo

    return true;
  }

  checkCP(): boolean {
    if (this.pedido.cp === undefined) {
      //alert("debes insertar un nombre");
      this.cpSpan = false;
      return false;
    }
    if (/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(this.pedido.cp)) {
      //alert("nombre ok");
      this.cpSpan = true;
    } else {
      // alert("nombre debe tener de 3 a 30 caracteres, solo letras y espacios");
      this.cpSpan = false;
      return false;
    }
    //fin validacion nombre
    //if/else por cada campo
    return true;
  }

  sweetAlertCheck(message: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: message,
    });
  }
}
