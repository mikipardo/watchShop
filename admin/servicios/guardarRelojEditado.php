<?php
include_once("../../libreriasPHP/conexion.php");

$reloj_tabla = R::dispense("relojes");

$reloj_tabla->id = $_POST["id"];

$reloj_tabla->marca = $_POST["marca"];

$reloj_tabla->modelo = $_POST["modelo"];

$reloj_tabla->valoracion = $_POST["valoracion"];

$reloj_tabla->precio = $_POST["precio"];

$reloj_tabla->digital = $_POST["digital"];

$reloj_tabla->subcategoria = $_POST["subcategoria"];

$reloj_tabla->genero = $_POST["genero"];

$reloj_tabla->comentario = $_POST["comentario"];

R::store($reloj_tabla);


include("gestionarProductos.php");
