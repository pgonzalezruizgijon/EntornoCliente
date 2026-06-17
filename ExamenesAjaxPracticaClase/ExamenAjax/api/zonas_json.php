<?php
require_once 'config.php';
require_once 'Zona.php';

try {
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error en la conexion: " . $e->getMessage());
}

$vec = [];

$consulta = $conexion->query("SELECT id, top_pos, left_pos, width_pos, height_pos, avion_id, modelo FROM zonas");
while ($reg = $consulta->fetchObject()) {
    $vec[] = new Zona(
        $reg->id,
        $reg->top_pos,
        $reg->left_pos,
        $reg->width_pos,
        $reg->height_pos,
        $reg->avion_id,
        $reg->modelo
    );
}

header('Content-Type: application/json; charset=utf-8');
print json_encode($vec);
?>
