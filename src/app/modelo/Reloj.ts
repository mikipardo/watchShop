export class Reloj{
  id:number = -1;
  modelo:string="";
  marca:string = "";
  valoracion:number=0;
  precio:number=0.0;
  digital:boolean=true;
  subcategoria:string="";
  genero?:string;
  comentario?:string;//con ? indicamos que el campo es opcional
}

