import { PedidoComponent } from './pedido/pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AppComponent } from './app.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listado', component: ListarProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'detalles/:id', component: DetalleProductoComponent },
  { path: "pedido", component:PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
