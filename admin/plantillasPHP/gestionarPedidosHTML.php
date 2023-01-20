<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>EN CONSTRUCCION</h1>

  <?php
    $idpedido = 0;
    $idpedido_anterior = 0;
    foreach($pedidos as $pedido){
        $idpedido = $pedido["id"];
        ?>

        <?php if($idpedido!=$idpedido_anterior){ ?>
            <div style="margin:10px; background-color: aqua">
            nombre destinatario: <?= $pedido["nombre"] ?> <br>
            direccion de envio: <?= $pedido["direccion"] ?> <br>
            horario de envio: <?= $pedido["horario"] ?> <br>
            fecha de envio: <?= $pedido["fecha"] ?> <br>
            telefono de envio: <?= $pedido["telefono"] ?> <br>
           
            </div>
            <div style="margin-left:30px">
            productos del pedido:
            </div>
        <?php } //fin if ?>

        <div style="margin-left:40px">
        modelo: <?= $pedido["modelo"] ?> <br>
        marca: <?= $pedido["marca"] ?> <br>
            precio: <?= $pedido["precio"] ?> <br>
            resto de campos...
        </div>

        <?php
        $idpedido_anterior = $idpedido;
    }//fin foreach
?>
</body>
</html>
