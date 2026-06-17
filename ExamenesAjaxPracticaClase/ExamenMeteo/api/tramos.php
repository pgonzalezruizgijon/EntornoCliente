<?php
declare(strict_types=1);

//sleep(2);

// api/tramos.php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *'); // Ajusta en producción
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

function badRequest(string $msg, int $code = 400): never {
    http_response_code($code);
    echo json_encode(['error' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

function isValidDate(string $s): bool {
    return (bool)preg_match('/^\d{4}-\d{2}-\d{2}$/', $s);
}

// Parámetro obligatorio
$fecha = isset($_GET['fecha']) ? trim((string)$_GET['fecha']) : '';
if ($fecha === '' || !isValidDate($fecha)) {
    badRequest("Parámetro GET 'fecha' obligatorio con formato YYYY-MM-DD");
}

// Conexión
$host = 'localhost';
$db   = 'ajax_meteo';
$user = 'root';
$pass = 'toor';
$charset = 'utf8mb4';

try {
    $mysqli = new mysqli($host, $user, $pass, $db);
    $mysqli->set_charset($charset);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión con la base de datos'], JSON_UNESCAPED_UNICODE);
    exit;
}

$sql = "
SELECT hora, temperatura_c, icono, viento, velocidad_kmh, lluvias_mm
FROM previsiones_tramos
WHERE fecha = ?
ORDER BY hora ASC
";

try {
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $fecha);
    $stmt->execute();
    $res = $stmt->get_result();

    $tramos = [];
    while ($row = $res->fetch_assoc()) {
        // hora viene como HH:MM:SS -> lo dejamos en HH:MM
        $horaHM = substr($row['hora'], 0, 5);

        $tramos[] = [
            'hora' => $horaHM,
            'prevision' => [
                'temperatura' => $row['temperatura_c'] . 'º',
                'icono' => $row['icono']
            ],
            'viento' => $row['viento'],
            'velocidad' => $row['velocidad_kmh'] . ' km/h',
            'lluvias' => $row['lluvias_mm'] . ' mm'
        ];
    }

    // Importante: DEVUELVE SOLO EL ARRAY DE TRAMOS (lo que pediste)
    echo json_encode($tramos, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error ejecutando la consulta'], JSON_UNESCAPED_UNICODE);
} finally {
    if (isset($stmt)) $stmt->close();
    $mysqli->close();
}
