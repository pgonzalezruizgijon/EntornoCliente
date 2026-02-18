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