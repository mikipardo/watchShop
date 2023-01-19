import { ServicioProductosService } from './../servicio-productos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reloj } from '../models/Reloj';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

idReloj:number = -1;
reloj:Reloj = {} as Reloj;
mensaje:String = "";
cantidad:number = 1;

constructor(private miServicio:ServicioProductosService, private activatedRoute:ActivatedRoute){ }

ngOnInit():void {

  this.idReloj = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  this.mensaje = "mostrar detalles del registro de id: " + this.idReloj;
  this.miServicio.obtenerRelojPorId(this.idReloj).subscribe(res => this.reloj = res);
}
agregarProductoCarrito():void{

  alert(
  "el id es " +this.idReloj);

  //llamar a una operacion del servicio de angular
  //para indicar al server que id de producto va al carrito

  //invocar al servicio de angular para que llame al agregarProductoCarrito.php
  //dandole la id del reloj y la cantidad
  //de momento para comprobar que esta funcionando el carrito:

    this.miServicio.agregarAlCarrito(this.idReloj,this.cantidad).subscribe(res => (res=="ok")?alert("producto agregado al carrito" +res):alert("no se pudo agregar el producto al carrito"+res) );
}

}
