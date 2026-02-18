Gemini ha dicho
¡Las fechas son un clásico! En los exámenes suelen mezclarlas con AJAX para filtrar eventos, reservas o lanzamientos.

Para este ejercicio, vamos a usar una temática de Agenda de Conciertos. Aquí la dificultad sube porque tienes que comparar la fecha actual con la fecha del XML para saber si un concierto ya ha pasado o es futuro.

1. Preparación de la Base de Datos (SQL)
SQL
CREATE DATABASE IF NOT EXISTS agenda_conciertos;
USE agenda_conciertos;

CREATE TABLE conciertos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artista VARCHAR(100),
    fecha DATE, -- Formato YYYY-MM-DD
    recinto VARCHAR(100),
    precio DECIMAL(10,2)
);

INSERT INTO conciertos (artista, fecha, recinto, precio) VALUES
('Rosalía', '2023-05-12', 'Palau Sant Jordi', 60.00),
('Quevedo', '2024-12-20', 'WiZink Center', 45.50),
('Coldplay', '2026-06-15', 'Estadi Olímpic', 95.00),
('Bad Bunny', '2026-02-14', 'Santiago Bernabéu', 120.00);
2. El Enunciado del Ejercicio
Crea una web que cargue los conciertos desde un XML (get_conciertos.php).

Tabla dinámica: Muestra todos los conciertos en una tabla.

Lógica de Fechas (JS): * Si la fecha del concierto ya ha pasado (es anterior a hoy), la fila debe tener un fondo gris y el botón de "Comprar" debe estar deshabilitado.

Si el concierto es futuro, debe mostrar un botón de "Comprar" que, al pulsarlo, diga: "Faltan X días para el concierto".

Filtro: Añade un botón que diga "Solo futuros". Al pulsar mejor, que solo muestre en la tabla los conciertos cuya fecha sea mayor o igual a la fecha actual del sistema.