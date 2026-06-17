CREATE DATABASE IF NOT EXISTS meteo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE meteo;

CREATE TABLE IF NOT EXISTS previsiones_diarias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  max_c SMALLINT NOT NULL,   -- temperatura máxima en °C (ej: 34)
  min_c SMALLINT NOT NULL,   -- temperatura mínima en °C (ej: 24)
  icono VARCHAR(50) NOT NULL, -- 'soleado', 'nublado', 'lluvia', etc.
  UNIQUE KEY uq_ciudad_fecha (ciudad, fecha),
  INDEX idx_ciudad (ciudad),
  INDEX idx_fecha (fecha)
);

CREATE TABLE IF NOT EXISTS previsiones_tramos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  temperatura_c SMALLINT NOT NULL,      -- ej: 26
  icono VARCHAR(50) NOT NULL,           -- ej: 'soleado'
  viento VARCHAR(30) NOT NULL,          -- ej: 'este'
  velocidad_kmh SMALLINT NOT NULL,      -- ej: 10
  lluvias_mm SMALLINT NOT NULL,         -- ej: 0

  UNIQUE KEY uq_fecha_hora (fecha, hora),
  INDEX idx_fecha (fecha)
);

INSERT INTO previsiones_diarias (fecha, ciudad, max_c, min_c, icono) VALUES
('2026-01-03', 'Utrera', 34, 24, 'soleado'),
('2026-01-04', 'Utrera', 29, 22, 'nublado'),
('2026-01-05', 'Utrera', 31, 23, 'lluvia');

INSERT INTO previsiones_tramos (fecha, hora, temperatura_c, icono, viento, velocidad_kmh, lluvias_mm) VALUES
-- 2026-01-03
('2026-01-03', '09:00:00', 26, 'soleado', 'este', 10, 0),
('2026-01-03', '12:00:00', 31, 'soleado', 'sur', 12, 0),
('2026-01-03', '15:00:00', 34, 'soleado', 'oeste', 18, 1),
('2026-01-03', '18:00:00', 32, 'soleado', 'oeste', 16, 0),
('2026-01-03', '21:00:00', 28, 'nublado', 'norte', 8, 0),

-- 2026-01-04
('2026-01-04', '15:00:00', 29, 'lluvia', 'oeste', 20, 14),
('2026-01-04', '18:00:00', 25, 'lluvia', 'oeste', 18, 9),
('2026-01-04', '21:00:00', 23, 'lluvia', 'sur', 10, 3),

-- 2026-01-05
('2026-01-05', '09:00:00', 24, 'soleado', 'sur', 6, 0),
('2026-01-05', '12:00:00', 28, 'soleado', 'sur', 8, 0),
('2026-01-05', '15:00:00', 31, 'soleado', 'este', 11, 0),
('2026-01-05', '18:00:00', 29, 'soleado', 'este', 9, 0);