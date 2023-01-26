import { Usuario } from './../modelo/usuario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reloj } from '../models/Reloj';
import { ServicioProductosService } from '../servicio-productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
nom:string="miki";
relojes: Reloj[] = {} as Reloj[];
user:Usuario={}as Usuario;

constructor(private servicioProductosService: ServicioProductosService,private route:Router) {
//podemos paramatrear un privado llamamos a servicios
}
ngOnInit():void{
  //este metodo se ejecuta cuando se inicia el componente
  //lo suyo es que esta informacion sea la que nos de el
  //servidor, de eso se encargara un servicio de angular
  //para pedir al servicio los relojes y quedarmelos en
  //el campo relojes definido arriba, usando un observable
  this.servicioProductosService.obtenerRelojes().subscribe( res => this.relojes = res );

  this.servicioProductosService.getCurrentUser(this.nom).subscribe( res => this.user = res );
  alert(this.user.pass);
  console.log(this.user);
}

verDetallesReloj(r:Reloj):void{
  //abreviatura para el routing module que declaramos   { path: "detalles/:id", component: LibroDetallesComponent},
  this.route.navigate(["detalles",r.id]);
}
}
