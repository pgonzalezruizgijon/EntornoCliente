<?php
ob_start(); // Limpia cualquier salida accidental
header('Content-Type: text/xml; charset=UTF-8');

try {
    $db = new PDO("mysql:host=localhost;dbname=agenda_conciertos;charset=utf8", "root", "toor");
    $query = $db->query("SELECT * FROM conciertos ORDER BY fecha ASC");
    $conciertos = $query->fetchAll(PDO::FETCH_ASSOC);

    echo "<?xml version='1.0' encoding='UTF-8'?>";
    echo "<agenda>";
    foreach ($conciertos as $c) {
        echo "<concierto>";
        echo "<artista>" . htmlspecialchars($c['artista']) . "</artista>";
        echo "<fecha>" . $c['fecha'] . "</fecha>";
        echo "<recinto>" . htmlspecialchars($c['recinto']) . "</recinto>";
        echo "<precio>" . $c['precio'] . "</precio>";
        echo "</concierto>";
    }
    echo "</agenda>";
} catch (Exception $e) {
    // Si falla la DB, enviamos el error en formato XML para que JS no de null
    echo "<?xml version='1.0' encoding='UTF-8'?><error>".$e->getMessage()."</error>";
}