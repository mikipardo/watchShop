<?php

require_once("../../libreriasPHP/conexion.php");

//obtentemos los relojes


 $relojEditable= R::getAll("select * from relojes where id = ? ", [ $_GET["id"] ] );

require("../plantillasPHP/editarRelojHTML.php");