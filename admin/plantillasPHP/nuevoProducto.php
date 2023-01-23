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
    include('menu.php');
    ?>


    <form class="dark:bg-gray-900" action="../servicios/registrarProducto.php"  method="post" enctype="multipart/form-data" style="padding-left: 30%; padding-right: 30%; padding-top:1rem; margin-top: 5%; margin-right: 10%; margin-left: 10%; border-radius:50px">

    <h1 style="color:white;font-size:2rem;margin:2rem;"><b>Crear Nuevo Reloj</b></h1>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> marca:</label>
    <input type="text" name="marca" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> modelo:</label>
    <input type="text" name="modelo" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> valoracion:</label>
    <input type="number" name="valoracion" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> precio:</label>
    <input type="number" name="precio" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> digital:</label>
    <input type="text" name="digital" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> subcategoria:</label>
    <input type="text" name="subcategoria" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> genero:</label>
    <input type="text" name="genero" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> comentario:</label>
    <input type="text" name="comentario" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> portada:</label>
    <input type="file" name="portada"/>

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-10 mb-10 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar Nuevo Reloj</button>
</div>
</form>
        </div>


</body>

</html>

