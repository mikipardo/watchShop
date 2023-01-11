import { Component } from '@angular/core';
import { Reloj } from '../modelo/Reloj';
import { ServicioProductosService } from '../servicio-productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

relojes: Reloj[] = {} as Reloj[];

constructor(private servicioProductosService: ServicioProductosService) {
//podemos paramatrear un privado llamamos a servicios
}
ngOnInit():void{
  //este metodo se ejecuta cuando se inicia el componente
  //lo suyo es que esta informacion sea la que nos de el
  //servidor, de eso se encargara un servicio de angular
  //para pedir al servicio los relojes y quedarmelos en
  //el campo relojes definido arriba, usando un observable
  this.servicioProductosService.obtenerRelojes().subscribe( res => this.relojes = res );

}
}
