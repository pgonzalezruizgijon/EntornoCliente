<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

$server = "localhost";
$user = "root";
$pass = "";
$db = "examen_angular";

$conn = mysqli_connect($server, $user, $pass, $db);

if (!$conn) {
    die(json_encode(["error" => "Conexión fallida"]));
}

$sql = "SELECT * FROM alumnos";
$result = mysqli_query($conn, $sql);

$alumnos = [];
while($row = mysqli_fetch_assoc($result)) {
    $row['repetidor'] = (bool)$row['repetidor'];
    $alumnos[] = $row;
}

echo json_encode($alumnos);
mysqli_close($conn);
?>