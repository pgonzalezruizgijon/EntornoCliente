CREATE DATABASE IF NOT EXISTS ejercicio_retro;
USE ejercicio_retro;

CREATE TABLE videojuegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    plataforma VARCHAR(50),
    anio INT,
    compania VARCHAR(50),
    imagen VARCHAR(255),
    descripcion TEXT
);

INSERT INTO videojuegos (titulo, plataforma, anio, compania, imagen, descripcion) VALUES
('Super Mario World', 'Nintendo', 1990, 'Nintendo', 'images/mario.jpg', 'El debut de Yoshi en la Super Nintendo.'),
('The Legend of Zelda', 'Nintendo', 1986, 'Nintendo', 'images/zelda.jpg', 'La primera gran aventura de Link en Hyrule.'),
('Sonic the Hedgehog', 'SEGA', 1991, 'SEGA', 'images/sonic.jpg', 'El erizo más rápido del mundo llega a la Master System.'),
('Streets of Rage', 'SEGA', 1991, 'SEGA', 'images/sor.jpg', 'Un clásico beat em up callejero de la Mega Drive.'),
('Final Fantasy VII', 'Sony', 1997, 'Square', 'images/ff7.jpg', 'Cloud y Sefirot en la entrega más famosa de PS1.'),
('Metal Gear Solid', 'Sony', 1998, 'Konami', 'images/mgs.jpg', 'Infiltración táctica con Solid Snake.');