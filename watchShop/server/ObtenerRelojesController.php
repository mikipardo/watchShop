<?php
//devolver en json los libros para que el cliente los muestre
require("../libreriasPHP/conexion.php");

echo json_encode(R::getAll("select * from relojes"));
