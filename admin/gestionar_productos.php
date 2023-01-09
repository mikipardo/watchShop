<?php

require("../librerias_php/setup_red_bean.php");

//obtentemos los libros
$libros = R::getAll("Select * from libros");
require("gestionar_productos_html.php");
