<?php
require_once 'config.php'; // Incluir el archivo de configuración
sleep(2);

class Provincia
{

    public int $id;
    public string $nombre;

    function __construct($id, $nombre)
    {
        $this->id = $id;
        $this->nombre = $nombre;
    }

    public function getId()   {  return $this->id; }
    public function getNombre() {  return $this->nombre; }
}


try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error en la conexión: " . $e->getMessage());
}

$vec = [];
$comunidad=$_GET['cod'];
$consulta = $conexion->query("SELECT id, nombre FROM provincias WHERE comunidad=$comunidad");

while ($reg = $consulta->fetchObject()) {
    $vec[] = new Provincia($reg->id, $reg->nombre);
}


// Crear la estructura XML usando SimpleXMLElement
$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n".
          "<provincias></provincias>";
$xml = new SimpleXMLElement($xmlstr);

foreach ($vec as $provincia) {
    $item = $xml->addChild('provincia');
    $item->addChild('id', $provincia->id);
    $item->addChild('nombre', $provincia->nombre);
}

// Configurar el encabezado para XML
header('Content-Type: application/xml; charset=utf-8');
// Imprimir el XML generado
print $xml->asXML();
