<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>
<body>
    <?php
    include("menu.php");

    ?>
    <h1 class="text-3xl text-center  font-bold my-16 ">
    <b>Listado de Productos de la Tienda:</b>
  </h1>

<?php

    foreach($todosRelojes as $rj){
        include("listadoRelojes.php");
    }

    ?>
    <div class="mt-16">
    </div>
</body>
</html>
