<?php
//recibir los datos del pedido y guardarlos en la tabla pedidos
//tambien guardar en la tabla productopedido cada uno de los productos del pedido

session_start();
require("../libreriasPHP/conexion.php");

//para recoger en forma de json lo recibido por post
$jsonInfo = json_decode(file_get_contents("php://input"));

$pedido = R::dispense("pedidos");

//los campos indicados a la izquierda son los campos de la tabla
//los campos de la derecha es lo enviado desde el servicio de angular
$pedido->nombre = $jsonInfo->nombre;
$pedido->direccion = $jsonInfo->direccion;
$pedido->tarjeta = $jsonInfo->tarjeta;
$pedido->cp = $jsonInfo->cp;
$pedido->telefono = $jsonInfo->telefono;
$pedido->fecha = $jsonInfo->fecha;
$pedido->horario = $jsonInfo->horario;

$id_generado_pedido = R::store($pedido);

//registro de los productos del carrito asociandolos
//a la id generada

foreach($_SESSION["carrito"] as $pc){
    $producto_pedido = R::dispense("productopedido");
    $producto_pedido->id_pedido = $id_generado_pedido;
    $producto_pedido->id_producto = $pc[0];
    $producto_pedido->cantidad = $pc[1];
    R::store($producto_pedido);
}

//vaciar carrito
$_SESSION["carrito"] = array();

echo json_encode("ok");
