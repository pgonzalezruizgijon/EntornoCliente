-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 17-02-2026 a las 09:08:15
-- Versión del servidor: 10.11.13-MariaDB-0ubuntu0.24.04.1
-- Versión de PHP: 8.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ajax_meteo`
--
CREATE DATABASE IF NOT EXISTS `ajax_meteo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `ajax_meteo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `previsiones_diarias`
--

CREATE TABLE `previsiones_diarias` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `max_c` smallint(6) NOT NULL,
  `min_c` smallint(6) NOT NULL,
  `icono` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `previsiones_diarias`
--

INSERT INTO `previsiones_diarias` (`id`, `fecha`, `ciudad`, `max_c`, `min_c`, `icono`) VALUES
(1, '2026-01-03', 'Utrera', 34, 24, 'soleado'),
(2, '2026-01-04', 'Utrera', 29, 22, 'nublado'),
(3, '2026-01-05', 'Utrera', 31, 23, 'lluvia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `previsiones_tramos`
--

CREATE TABLE `previsiones_tramos` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `temperatura_c` smallint(6) NOT NULL,
  `icono` varchar(50) NOT NULL,
  `viento` varchar(30) NOT NULL,
  `velocidad_kmh` smallint(6) NOT NULL,
  `lluvias_mm` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `previsiones_tramos`
--

INSERT INTO `previsiones_tramos` (`id`, `fecha`, `hora`, `temperatura_c`, `icono`, `viento`, `velocidad_kmh`, `lluvias_mm`) VALUES
(1, '2026-01-03', '09:00:00', 26, 'soleado', 'este', 10, 0),
(2, '2026-01-03', '12:00:00', 31, 'soleado', 'sur', 12, 0),
(3, '2026-01-03', '15:00:00', 34, 'soleado', 'oeste', 18, 1),
(4, '2026-01-03', '18:00:00', 32, 'soleado', 'oeste', 16, 0),
(5, '2026-01-03', '21:00:00', 28, 'nublado', 'norte', 8, 0),
(6, '2026-01-04', '15:00:00', 29, 'lluvia', 'oeste', 20, 14),
(7, '2026-01-04', '18:00:00', 25, 'lluvia', 'oeste', 18, 9),
(8, '2026-01-04', '21:00:00', 23, 'lluvia', 'sur', 10, 3),
(9, '2026-01-05', '09:00:00', 24, 'soleado', 'sur', 6, 0),
(10, '2026-01-05', '12:00:00', 28, 'soleado', 'sur', 8, 0),
(11, '2026-01-05', '15:00:00', 31, 'soleado', 'este', 11, 0),
(12, '2026-01-05', '18:00:00', 29, 'soleado', 'este', 9, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `previsiones_diarias`
--
ALTER TABLE `previsiones_diarias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_ciudad_fecha` (`ciudad`,`fecha`),
  ADD KEY `idx_ciudad` (`ciudad`),
  ADD KEY `idx_fecha` (`fecha`);

--
-- Indices de la tabla `previsiones_tramos`
--
ALTER TABLE `previsiones_tramos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_fecha_hora` (`fecha`,`hora`),
  ADD KEY `idx_fecha` (`fecha`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `previsiones_diarias`
--
ALTER TABLE `previsiones_diarias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `previsiones_tramos`
--
ALTER TABLE `previsiones_tramos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
