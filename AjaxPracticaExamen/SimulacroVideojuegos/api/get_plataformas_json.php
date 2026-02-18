<?php
header('Content-Type: application/json');
$db = new PDO("mysql:host=localhost;dbname=ejercicio_retro;charset=utf8", "root", "toor");

$query = $db->query("SELECT DISTINCT plataforma FROM videojuegos");
$plataformas = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($plataformas);
?>