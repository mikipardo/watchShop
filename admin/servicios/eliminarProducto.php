<?php

require_once("../../libreriasPHP/conexion.php");

//obtentemos los relojes
 json_encode(R::getRow("delete from relojes where id = ? ", [ $_GET["id"] ] ));


 include("../plantillasPHP/okRegistro.php");





