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
    <form action="registrar_producto.php" method="post" enctype="multipart/form-data" >
        <div>
        titulo:<input type="text" name="titulo"/>
        </div>
        <div>
        autor:<input type="text" name="autor"/>
        </div>
        <div>
        precio:<input type="number" name="precio"/>
        </div>
        <div>
        portada:<input type="file" name="portada"/>
        </div>
        <input type="submit" value="Registrar Libro"/>
    </form>
</body>

</html>