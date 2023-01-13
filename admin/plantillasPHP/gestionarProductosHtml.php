<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include("menu.php");

    ?>
    <div>
        <h1><b>Listado de Productos de la Tienda:</b></h1>
    </div>

<?php

    foreach($todosRelojes as $rj){
        include("listadoRelojes.php");
    }

    ?>
</body>
</html>
