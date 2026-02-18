<?php
header('Content-Type: text/xml');
$db = new PDO("mysql:host=localhost;dbname=ejercicio_retro;charset=utf8", "root", "toor");

$plataforma = isset($_GET['plataforma']) ? $_GET['plataforma'] : "";
$sql = "SELECT * FROM videojuegos";
if ($plataforma != "") {
    $sql .= " WHERE plataforma = '$plataforma'";
}

$query = $db->query($sql);
$juegos = $query->fetchAll(PDO::FETCH_ASSOC);

echo "<?xml version='1.0' encoding='UTF-8'?>";
echo "<videojuegos>";
foreach ($juegos as $j) {
    echo "<juego>";
    echo "<titulo>{$j['titulo']}</titulo>";
    echo "<anio>{$j['anio']}</anio>";
    echo "<compania>{$j['compania']}</compania>";
    echo "<imagen>{$j['imagen']}</imagen>";
    echo "<descripcion>{$j['descripcion']}</descripcion>";
    echo "</juego>";
}
echo "</videojuegos>";
?>