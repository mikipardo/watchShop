<?php
echo"5a56sd15asd";
//este archivo hace las veces de para los comentarios
$operacion = "obtener";
//aqui en funcion de como se llame este php
//$operacion sera una cosa u otra
require "conexion.php";
switch($operacion){
    case "obtener":
        //obtener relojes y emitirlos en json
        $relojes = R::getAll("select * from relojes");
        console.log($relojes);

        echo json_encode($relojes);
        break;
    case "borrar":
        //borrar el relojes de id indicado
        break;
    case "registrar":
        //registrar el relojes recibido
        break;
    case "editar":
        //editar el relojes recibido
        break;
}

