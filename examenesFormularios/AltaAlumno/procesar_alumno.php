<?php
$nombre = $_POST["minombre"] ?? "";
$sexo = $_POST["misexo"] ?? "";
$edad = $_POST["miedad"] ?? "";
$fecha = $_POST["mifecha"] ?? "";
$semana = $_POST["misemana"] ?? "";
$deportista = isset($_POST["mideportista"]) ? "Sí" : "No";
$deporte = $_POST["mideporte"] ?? "0";
$observaciones = $_POST["miobservaciones"] ?? "";

$nombreDeporte = "No indicado";

switch ($deporte) {
    case "1":
        $nombreDeporte = "Fútbol";
        break;
    case "2":
        $nombreDeporte = "Baloncesto";
        break;
    case "3":
        $nombreDeporte = "Tenis";
        break;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Procesar alumno</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container border mt-3 p-4">
    <h1>Datos recibidos</h1>

    <table class="table table-bordered">
        <tr>
            <th>Nombre</th>
            <td><?= htmlspecialchars($nombre) ?></td>
        </tr>
        <tr>
            <th>Sexo</th>
            <td><?= htmlspecialchars($sexo) ?></td>
        </tr>
        <tr>
            <th>Edad</th>
            <td><?= htmlspecialchars($edad) ?></td>
        </tr>
        <tr>
            <th>Fecha nacimiento</th>
            <td><?= htmlspecialchars($fecha) ?></td>
        </tr>
        <tr>
            <th>Semana preferente</th>
            <td><?= htmlspecialchars($semana) ?></td>
        </tr>
        <tr>
            <th>Deportista</th>
            <td><?= $deportista ?></td>
        </tr>
        <tr>
            <th>Deporte</th>
            <td><?= htmlspecialchars($nombreDeporte) ?></td>
        </tr>
        <tr>
            <th>Observaciones</th>
            <td><?= htmlspecialchars($observaciones) ?></td>
        </tr>
    </table>

    <a href="alta_alumno.html" class="btn btn-primary">Volver</a>
</div>

</body>
</html>