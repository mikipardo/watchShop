<?php
session_start();
if(isset($_SESSION["carrito"])){
  require("../libreriasPHP/conexion.php");
    //extraer las ids y cantidades de los productos
    //en $_SESSION["carrito"]
    $ids = array();
    $cantidades = array();
    foreach($_SESSION["carrito"] as $elemento){
        array_push($ids, $elemento[0]);
        array_push($cantidades, $elemento[1]);
    }

    $ids_sql = implode(",",$ids);
    $sql = "select * from relojes where id in ($ids_sql)";
    $relojes = R::getAll($sql);
    $respuesta = array();
    //recorro los relojes obtenidos de base de datos, que son los del carrito,
    //para formar una respuesta para el cliente
    for($i = 0; $i<count($relojes); $i++){
        array_push( $respuesta, array( "reloj" => $relojes[$i], "cantidad" => $cantidades[$i]) );
    }
    echo json_encode($respuesta);

}else{
    echo json_encode(array());
}
