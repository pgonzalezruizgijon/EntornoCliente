// ==========================
// TESTS DE LA CLASE PELICULA
// ==========================
describe("Clase Pelicula", function () {

    // Test: comprobar que se crea correctamente
    it("debe crear una película correctamente", function () {

        // Creamos una película de prueba
        const peli = new Pelicula(
            1,
            "La historia interminable",
            Pelicula.GENERO_HISTORIA,
            "Wolfgang Petersen",
            102
        );

        // Comprobamos cada propiedad
        expect(peli.id).toBe(1);
        expect(peli.titulo).toBe("La historia interminable");
        expect(peli.genero).toBe(Pelicula.GENERO_HISTORIA);
        expect(peli.director).toBe("Wolfgang Petersen");
        expect(peli.duracion).toBe(102);
    });

    // Test: comprobar el toString
    it("debe devolver bien el toString", function () {

        const peli = new Pelicula(
            2,
            "Regreso al futuro",
            Pelicula.GENERO_SCFI,
            "Robert Zemeckis",
            116
        );

        // Debe devolver el formato correcto
        expect(peli.toString()).toBe("Regreso al futuro (116 min.)");
    });

});


// ==========================
// TESTS DE LA CLASE PROYECCION
// ==========================
describe("Clase Proyeccion", function () {

    // Test: creación de proyección
    it("debe crear una proyección con película y fecha", function () {

        const peli = new Pelicula(
            2,
            "Regreso al futuro",
            Pelicula.GENERO_SCFI,
            "Robert Zemeckis",
            116
        );

        const proy = new Proyeccion(peli, "01/12/2025", "18:30");

        // Comprobamos que guarda la película correctamente
        expect(proy.pelicula).toBe(peli);

        // Comprobamos que la fecha es un objeto Date
        expect(proy.fecha instanceof Date).toBeTrue();
    });

    // Test: cálculo de la fecha de fin
    it("debe calcular la fecha fin de la película", function () {

        const peli = new Pelicula(
            2,
            "Regreso al futuro",
            Pelicula.GENERO_SCFI,
            "Robert Zemeckis",
            116
        );

        const proy = new Proyeccion(peli, "01/12/2025", "18:30");

        const fin = proy.getFechaFinPelicula();

        // 18:30 + 116 min = 20:26
        expect(fin.getHours()).toBe(20);
        expect(fin.getMinutes()).toBe(26);
    });

});


// ==========================
// TESTS DE LA CLASE SALA
// ==========================
describe("Clase Sala", function () {

    // Test: añadir proyecciones
    it("debe añadir proyecciones correctamente", function () {

        const peli = new Pelicula(
            1,
            "La historia interminable",
            Pelicula.GENERO_HISTORIA,
            "Wolfgang Petersen",
            102
        );

        const proy = new Proyeccion(peli, "01/12/2025", "16:00");

        const sala = new Sala(1);

        // Añadimos la proyección
        sala.añadirProyeccion(proy);

        // Comprobamos que se ha añadido
        expect(sala._proyecciones.length).toBe(1);
        expect(sala._proyecciones[0]).toBe(proy);
    });

    // Test: error si no es Proyeccion
    it("debe lanzar error si no se añade una Proyeccion", function () {

        const peli = new Pelicula(
            1,
            "La historia interminable",
            Pelicula.GENERO_HISTORIA,
            "Wolfgang Petersen",
            102
        );

        const sala = new Sala(1);

        // Esperamos que lance error
        expect(function () {
            sala.añadirProyeccion(peli); // ❌ no es Proyeccion
        }).toThrowError("Solo se pueden añadir objetos de tipo Proyeccion");
    });

    // Test: filtrar por género
    it("debe filtrar proyecciones por género", function () {

        const peli1 = new Pelicula(
            1,
            "La historia interminable",
            Pelicula.GENERO_HISTORIA,
            "Wolfgang Petersen",
            102
        );

        const peli2 = new Pelicula(
            2,
            "Regreso al futuro",
            Pelicula.GENERO_SCFI,
            "Robert Zemeckis",
            116
        );

        const proy1 = new Proyeccion(peli1, "01/12/2025", "16:00");
        const proy2 = new Proyeccion(peli2, "01/12/2025", "18:30");

        const sala = new Sala(1);
        sala.añadirProyeccion(proy1);
        sala.añadirProyeccion(proy2);

        // Filtramos por SCFI
        const resultado = sala.getProyeccionesGenero(Pelicula.GENERO_SCFI);

        expect(resultado.length).toBe(1);
        expect(resultado[0]).toBe(proy2);
    });

    // Test: filtrar por fecha
    it("debe filtrar proyecciones por fecha", function () {

        const peli1 = new Pelicula(1, "La historia interminable", Pelicula.GENERO_HISTORIA, "Wolfgang Petersen", 102);
        const peli2 = new Pelicula(2, "Regreso al futuro", Pelicula.GENERO_SCFI, "Robert Zemeckis", 116);
        const peli3 = new Pelicula(3, "Aterriza como puedas", Pelicula.GENERO_COMEDIA, "Jim Abrahams", 88);

        const proy1 = new Proyeccion(peli1, "01/12/2025", "16:00");
        const proy2 = new Proyeccion(peli2, "01/12/2025", "18:30");
        const proy3 = new Proyeccion(peli3, "02/12/2025", "20:00");

        const sala = new Sala(1);
        sala.añadirProyeccion(proy1);
        sala.añadirProyeccion(proy2);
        sala.añadirProyeccion(proy3);

        // Filtramos por fecha
        const resultado = sala.getProyeccionesFecha("01/12/2025");

        expect(resultado.length).toBe(2);
        expect(resultado).toContain(proy1);
        expect(resultado).toContain(proy2);
    });

});