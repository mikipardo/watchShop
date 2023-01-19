<?php

require("../../libreriasPHP/conexion.php");

//obtentemos los relojes
$todosRelojes = R::getAll("Select * from relojes");


require("../plantillasPHP/gestionarProductosHtml.php");





