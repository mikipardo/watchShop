<?php
require("../../libreriasPHP/conexion.php");

$sql = "select r.id, r.modelo, r.marca, r.precio,
p.nombre, p.direccion, p.tarjeta, p.cp , p.telefono , p.horario, p.fecha, pp.cantidad
from relojes as r, pedidos as p, productopedido as pp
where p.id = pp.id_pedido and
r.id = pp.id_producto
order by p.id desc
";

$pedidos = R::getAll($sql);

require("../plantillasPHP/gestionarPedidosHTML.php");
