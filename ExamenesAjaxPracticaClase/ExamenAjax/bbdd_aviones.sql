CREATE DATABASE IF NOT EXISTS bbdd_aviones;
USE bbdd_aviones;

CREATE TABLE aviones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(100) NOT NULL,
    informacion TEXT NOT NULL
);

CREATE TABLE zonas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    top_pos VARCHAR(20) NOT NULL,
    left_pos VARCHAR(20) NOT NULL,
    width_pos VARCHAR(20) NOT NULL,
    height_pos VARCHAR(20) NOT NULL,
    avion_id INT NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    CONSTRAINT fk_zonas_aviones
        FOREIGN KEY (avion_id) REFERENCES aviones(id)
);

INSERT INTO aviones (id, modelo, informacion) VALUES
    (1, 'F-23', 'El F-23, conocido en pruebas como YF-23A, fue un prototipo furtivo desarrollado para el programa Advanced Tactical Fighter de la USAF. Destaco por su diseno enfocado en el sigilo y la alta velocidad, pero no entro en servicio porque la competicion la gano el YF-22.'),
    (2, 'F-35', 'El F-35 Lightning II es un caza de quinta generacion con capacidades furtivas, fusion de sensores y funciones multiproposito. Fue disenado para compartir informacion y operar en misiones aire-aire y aire-superficie junto a otras fuerzas.'),
    (3, 'F-22', 'El F-22 Raptor es un caza de quinta generacion orientado a la superioridad aerea. Combina baja observabilidad, supercrucero, gran maniobrabilidad y avionica avanzada para dominar combates aereos y atacar objetivos en superficie.'),
    (4, 'F-18 Super Hornet', 'El F/A-18E/F Super Hornet es un caza embarcado polivalente de la Armada de Estados Unidos. Puede realizar misiones de combate aire-aire, ataque a tierra, reconocimiento y apoyo a operaciones navales desde portaaviones.'),
    (5, 'F-14 Tomcat', 'El F-14 Tomcat fue un caza bimotor y biplaza de ala de geometria variable creado para la Marina de Estados Unidos. Se hizo muy conocido por su defensa de flotas a larga distancia y por su capacidad para interceptar amenazas antes de que alcanzaran al grupo naval.'),
    (6, 'F-15C Eagle', 'El F-15C Eagle es una version del F-15 dedicada principalmente a la superioridad aerea. Es un caza bimotor rapido y maniobrable, pensado para localizar, seguir y derrotar aviones enemigos en combates de alta intensidad.');

INSERT INTO zonas (id, top_pos, left_pos, width_pos, height_pos, avion_id, modelo) VALUES
    (1, '1.5%', '3%', '22%', '42%', 1, 'F-23'),
    (2, '1.5%', '30%', '22%', '42%', 2, 'F-35'),
    (3, '1.5%', '56%', '22%', '42%', 3, 'F-22'),
    (4, '47%', '14%', '22%', '42%', 4, 'F-18 Super Hornet'),
    (5, '47%', '45%', '22%', '42%', 5, 'F-14 Tomcat'),
    (6, '47%', '71%', '22%', '42%', 6, 'F-15C Eagle');
