<?php
require_once "../librerias_php/setup_red_bean.php";
// es como el require 
/**Include
inserta en nuestro programa un código procedente de otro archivo, en caso de que dicho archivo no exista 
o tenga errores en su interior nuestro programa mostrará un warning pero seguirá funcionando.
Require
Funciona de manera similar a include, pero en este caso, si el archivo no existe
 o contiene errores, nuestro programa no funcionará y obtendremos un fatal error en el log
Include_once y Require_once
Funcionan exactamente de la misma forma que las anteriores salvo que impiden la carga de un mismo fichero varias veces. */

//preparo un registro para la tabla libros
$libro = R::dispense("libros");
$libro->titulo = $_POST["titulo"];//los corchetes es el name del input
// la flecha y titulo es el objto con el atributo que vamos a crear en la BBDD

$libro->autor = $_POST["autor"];
$libro->precio = $_POST["precio"];
$idGenerada=R::store($libro);//con esto guardamos en BBDD también te devuelve una id generada
//Una vez registrado el libro vamos a generar su portada
//falta validar los datos antes de guardar
// para guaradar el archivo subido con un nombre igual a la id generada
move_uploaded_file($_FILES["portada"]["tmp_name"],"../server/imagenes/$idGenerada.jpg");
//para mover el archivo de la foto a la ruta

include("registro_ok.php");