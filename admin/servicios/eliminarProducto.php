<?php

require("../../libreriasPHP/conexion.php");

//obtentemos los relojes
echo json_encode(R::getRow("delete from relojes where id = ? ", [ $_GET["id"] ] ));


require("../plantillasPHP/okRegistro.php");





