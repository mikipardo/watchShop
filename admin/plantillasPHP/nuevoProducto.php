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
    include('menu.php');

    ?>
    <h1>Introduce los datos del nuevo producto</h1>
    <form action="../servicios/registrarProducto.php" method="post" enctype="multipart/form-data" >
        <div>
        marca:<input type="text" name="marca"/>
        </div>
        <div>
        modelo:<input type="text" name="modelo"/>
        </div>
        <div>
        valoracion:<input type="number" name="valoracion"/>
        </div>
        <div>
        precio:<input type="number" name="precio"/>
        </div>
        <div>
        digital:<input type="text" name="digital"/>
        </div>
        <div>
        subcategoria:<input type="text" name="subcategoria"/>
        </div>
        <div>
        genero:<input type="text" name="genero"/>
        </div>
        <div>
        comentario:<input type="text" name="comentario"/>
        </div>
        <div>
        portada:<input type="file" name="portada"/>
        </div>
        <input type="submit" value="Registrar Libro"/>
    </form>
</body>

</html>
