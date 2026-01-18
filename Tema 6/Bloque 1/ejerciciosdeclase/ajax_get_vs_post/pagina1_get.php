<?php
sleep(2);
$ar = fopen("comentarios.txt", "a") or
  die("No se pudo abrir el archivo");
fputs($ar, "Nombre:" . $_GET['nombre'] . "\n");
fputs($ar, "Comentarios:" . $_GET['comentarios'] . "\n\n");
fclose($ar);
header('Content-Type: text/plain; charset=utf-8');
echo "Se han guardado los datos correctamente (GET)";
