<?php
require_once 'config.php'; // credenciales/config DB

// sleep(2);

// Clase integrada (ya no necesitas Comunidad.php)
class Comunidad
{
    public int $id;
    public string $nombre;

    public function __construct($id, $nombre)
    {
        $this->id = (int)$id;
        $this->nombre = (string)$nombre;
    }

    public function getId() { return $this->id; }
    public function getNombre() { return $this->nombre; }
}

try {
    $conexion = new PDO(
        "mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset",
        $db_usuario,
        $db_contraseña,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(["ok" => false, "error" => "Error en la conexión"]);
    exit;
}

$vec = [];
$consulta = $conexion->query("SELECT id, nombre FROM comunidades");

while ($reg = $consulta->fetchObject()) {
    $vec[] = new Comunidad($reg->id, $reg->nombre);
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($vec);
