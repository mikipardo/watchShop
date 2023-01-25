import { PedidoComponent } from './pedido/pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AppComponent } from './app.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WithoutSaveGuard } from './without-save.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'listado', component: ListarProductosComponent },
  { path: 'carrito', component: CarritoComponent,canActivate:[WithoutSaveGuard] },
  { path: 'detalles/:id', component: DetalleProductoComponent },
  { path: "pedido", component:PedidoComponent},
  { path: "home", component:HomeComponent},
  { path: "main", component:Component},
  { path: "login", component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
