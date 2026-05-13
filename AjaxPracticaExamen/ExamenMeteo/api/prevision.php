<?php
declare(strict_types=1);

//sleep(2);

// api/prevision.php

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
    // YYYY-MM-DD
    return (bool)preg_match('/^\d{4}-\d{2}-\d{2}$/', $s);
}

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

// Parámetros opcionales
$ciudad = isset($_GET['ciudad']) ? trim((string)$_GET['ciudad']) : null;
$desde  = isset($_GET['desde']) ? trim((string)$_GET['desde']) : null;
$hasta  = isset($_GET['hasta']) ? trim((string)$_GET['hasta']) : null;
$limit  = isset($_GET['limit']) ? (int)$_GET['limit'] : 30;

if ($desde !== null && $desde !== '' && !isValidDate($desde)) badRequest("Parámetro 'desde' inválido. Formato: YYYY-MM-DD");
if ($hasta !== null && $hasta !== '' && !isValidDate($hasta)) badRequest("Parámetro 'hasta' inválido. Formato: YYYY-MM-DD");
if ($limit <= 0 || $limit > 365) badRequest("Parámetro 'limit' inválido. Rango permitido: 1..365");

// Construcción segura de consulta
$sql = "
SELECT fecha, ciudad, max_c, min_c, icono
FROM previsiones_diarias
WHERE 1=1
";
$params = [];
$types  = "";

// Filtros
if ($ciudad !== null && $ciudad !== '') {
    $sql .= " AND ciudad = ? ";
    $types .= "s";
    $params[] = $ciudad;
}
if ($desde !== null && $desde !== '') {
    $sql .= " AND fecha >= ? ";
    $types .= "s";
    $params[] = $desde;
}
if ($hasta !== null && $hasta !== '') {
    $sql .= " AND fecha <= ? ";
    $types .= "s";
    $params[] = $hasta;
}

$sql .= " ORDER BY fecha ASC LIMIT ? ";
$types .= "i";
$params[] = $limit;

try {
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param($types, ...$params);
    $stmt->execute();
    $res = $stmt->get_result();

    $out = [];
    while ($row = $res->fetch_assoc()) {
        $out[] = [
            'fecha'  => $row['fecha'],   // "2026-01-03"
            'ciudad' => $row['ciudad'],  // "Utrera"
            'resumen' => [
                'max'   => $row['max_c'] . "º",
                'min'   => $row['min_c'] . "º",
                'icono' => $row['icono']
            ]
        ];
    }

    echo json_encode($out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error ejecutando la consulta'], JSON_UNESCAPED_UNICODE);
} finally {
    if (isset($stmt)) $stmt->close();
    $mysqli->close();
}
