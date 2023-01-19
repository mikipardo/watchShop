<?php
require_once ("../../libreriasPHP/conexion.php");
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
$reloj = R::dispense("relojes");
$reloj->modelo = $_POST["modelo"];//los corchetes es el name del input
// la flecha y titulo es el objto con el atributo que vamos a crear en la BBDD

$reloj->marca = $_POST["marca"];
$reloj->valoracion = $_POST["valoracion"];
$reloj->precio = $_POST["precio"];
$reloj->digital = $_POST["digital"];
$reloj->subcategoria = $_POST["subcategoria"];
$reloj->genero = $_POST["genero"];
$reloj->comentario = $_POST["comentario"];
$idGenerada=R::store($reloj);//con esto guardamos en BBDD también te devuelve una id generada
//Una vez registrado el libro vamos a generar su portada
//falta validar los datos antes de guardar
// para guaradar el archivo subido con un nombre igual a la id generada
move_uploaded_file($_FILES["portada"]["tmp_name"],"../../src/assets/imagenes/$idGenerada.jpg");
//para mover el archivo de la foto a la ruta

include("../plantillasPHP/okRegistro.php");
