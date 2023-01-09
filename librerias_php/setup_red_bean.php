<?php
require "rb-mysql.php";
R::setup("mysql:host=localhost;dbname=tienda_angular","root","");
//la R es la libreria y el ::Metodo es un estático
//cuando se suba al hosting hay que cambiar el localHost