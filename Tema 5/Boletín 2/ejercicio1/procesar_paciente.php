<?php

$nombre = $_POST['minombre'];
$sexo = $_POST['misexo'];
$altura = $_POST['mialtura'];
$fecha = $_POST['mifecha'];
$semana = $_POST['misemana'];
$observaciones = $_POST['miobservaciones'];

$fumador = isset($_POST['mifumador']) ? "Sí" : "No";
$cigarrillos = $_POST['micigarrillos'] ?? "";

?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Resumen Paciente</title>
</head>
<body>

  <h1>Resumen de datos del paciente</h1>
  <p><strong>Nombre:</strong> <?php echo $nombre; ?></p>
  <p><strong>Sexo:</strong> <?php echo $sexo; ?></p>
  <p><strong>Altura:</strong> <?php echo $altura; ?> cm</p>
  <p><strong>Fecha nacimiento:</strong> <?php echo $fecha; ?></p>
  <p><strong>Semana preferente:</strong> <?php echo $semana; ?></p>
  <p><strong>Fumador:</strong> <?php echo $fumador; ?></p>
  <?php if ($fumador === "Sí") { ?>
    <p><strong>Cigarrillos:</strong> <?php echo $cigarrillos; ?></p>
  <?php } ?>
  <p><strong>Observaciones:</strong> <?php echo $observaciones; ?></p>

</body>
</html>