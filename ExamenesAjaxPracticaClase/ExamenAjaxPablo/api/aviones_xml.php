<?php
require_once 'config.php';
require_once 'Avion.php';

try {
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error en la conexion: " . $e->getMessage());
}

$vec = [];

if (isset($_POST['id']) && $_POST['id'] !== '') {
    $consulta = $conexion->prepare("SELECT id, modelo, informacion FROM aviones WHERE id = :id");
    $consulta->bindValue(':id', (int) $_POST['id'], PDO::PARAM_INT);
    $consulta->execute();
} else {
    $consulta = $conexion->query("SELECT id, modelo, informacion FROM aviones");
}

while ($reg = $consulta->fetchObject()) {
    $vec[] = new Avion($reg->id, $reg->modelo, $reg->informacion);
}

$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n" .
          "<aviones></aviones>";
$xml = new SimpleXMLElement($xmlstr);

foreach ($vec as $avion) {
    $item = $xml->addChild('avion');
    $item->addChild('id', $avion->id);
    $item->addChild('modelo', htmlspecialchars($avion->modelo));
    $item->addChild('informacion', htmlspecialchars($avion->informacion));
}

header('Content-Type: application/xml; charset=utf-8');
print $xml->asXML();
?>
