import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';//para servicios REST API
//en este archivo indicamos de las librerias de angular
//Que queremos usar en el proyecto


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { FormsModule } from '@angular/forms';
//para poder unsar ngModel en el html del componente:
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, //declaramos componentes
    ListarProductosComponent,
    DetalleProductoComponent,
    CarritoComponent,
    PedidoComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,//para poder usar ngModel
    BrowserModule, //declaramos servicios
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
