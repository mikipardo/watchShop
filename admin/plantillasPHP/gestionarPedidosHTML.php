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
    <b> Gestion de Pedidos:</b>


  </h1>

  <?php

$idpedido = 0;
$idpedido_anterior = 0;
$id_direccion=0;
$idActual=0;
foreach($pedidos as $pedido){
    $idpedido = $pedido["id"];

    ?>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-32  mr-32">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                nombre
                </th>
                <th scope="col" class="px-6 py-3">
                direccion
                </th>
                <th scope="col" class="px-6 py-3">
                horario
                </th>
                <th scope="col" class="px-6 py-3">
                fecha
                </th>
                <th scope="col" class="px-6 py-3">
                telefono
                </th>
                <th scope="col" class="px-6 py-3">
                tarjeta
                </th>
                <th scope="col" class="px-6 py-3">
                cp
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <?php

        if($idpedido!=$idpedido_anterior){

          ?>

        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <?= $pedido["nombre"] ?>  <?= $pedido["id"] ?>
                </th>
                <td class="px-6 py-4">
                <?= $pedido["direccion"] ?>
                </td>
                <td class="px-6 py-4">
               <?= $pedido["horario"] ?>
                </td>
                <td class="px-6 py-4">
                <?= $pedido["fecha"] ?>
                </td>
                <td class="px-6 py-4">
                <?= $pedido["telefono"] ?>
                </td>
                <td class="px-6 py-4">
                <?= $pedido["tarjeta"] ?>
                </td>
                <td class="px-6 py-4">
                <?= $pedido["cp"] ?>
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
        <?php } //fin if?>
        <div class="relative overflow-x-auto mb-16">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Marca
                </th>
                <th scope="col" class="px-6 py-3">
                    Modelo
                </th>

                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <?= $pedido["marca"] ?> <br>
                </th>
                <td class="px-6 py-4">
                <?= $pedido["modelo"] ?>
                </td>

                <td class="px-6 py-4">
                <?= $pedido["precio"] ?>
                </td>
            </tr>
        </tbody>
    </table>
</div>


        <?php
        $idpedido_anterior = $idpedido;
    }//fin foreach
?>
    </table>
</div>
<div class="mt-16"></div>
</body>


</html>




