<div style="margin:10px">
modelo:<?=$rj["modelo"]?>
</div>
<div style="margin:10px">
marca:<?=$rj["marca"]?>
</div>
<div style="margin:10px">
valoracion:<?=$rj["valoracion"]?>
</div>
<div style="margin:10px">
precio:<?=$rj["precio"]?>
</div>
<div style="margin:10px">
digital:<?=$rj["digital"]?>
</div>
<div style="margin:10px">
subcategoria:<?=$rj["subcategoria"]?>
</div>
<div style="margin:10px">
genero:<?=$rj["genero"]?>

</div>
<div style="margin:10px">
comentario:<?=$rj["comentario"]?>
</div>
<div style="margin:10px">
<img src="../../src/assets/imagenes/<?=$rj["id"]?>.jpg" height="80"/>
</div>

<form method="post" action="../servicios/eliminarProducto.php?id=<?=$rj["id"]?> " >
        <input type="submit" value="Eliminar"/>
</form>
