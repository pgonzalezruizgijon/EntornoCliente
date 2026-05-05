// ==========================
// CLASE PELICULA
// ==========================
class Pelicula {

    // Constantes estáticas para los géneros
    // Se accede como: Pelicula.GENERO_SCFI
    static GENERO_HISTORIA = 0;
    static GENERO_SCFI = 1;
    static GENERO_COMEDIA = 2;

    // Constructor: crea una nueva película
    constructor(id, titulo, genero, director, duracion) {
        this._id = id;               // Identificador único
        this._titulo = titulo;       // Título de la película
        this._genero = genero;       // Género (usar constantes)
        this._director = director;   // Director
        this._duracion = duracion;   // Duración en minutos
    }

    // Getters → permiten acceder a propiedades privadas
    get id() {
        return this._id;
    }

    get titulo() {
        return this._titulo;
    }

    get genero() {
        return this._genero;
    }

    get director() {
        return this._director;
    }

    get duracion() {
        return this._duracion;
    }

    // Representación en texto de la película
    toString() {
        return `${this._titulo} (${this._duracion} min.)`;
    }
}


// ==========================
// CLASE PROYECCION
// ==========================
class Proyeccion {

    // Constructor: recibe una película y fecha/hora en string
    constructor(pelicula, fechaStr, horaStr) {

        this._pelicula = pelicula; // Objeto Pelicula

        // Separar fecha "dd/mm/yyyy"
        const partesFecha = fechaStr.split("/");
        const dia = parseInt(partesFecha[0]);
        const mes = parseInt(partesFecha[1]) - 1; // JS usa meses 0-11
        const anio = parseInt(partesFecha[2]);

        // Separar hora "HH:MM"
        const partesHora = horaStr.split(":");
        const hora = parseInt(partesHora[0]);
        const minutos = parseInt(partesHora[1]);

        // Crear objeto Date con fecha y hora
        this._fecha = new Date(anio, mes, dia, hora, minutos);
    }

    // Getter de la película
    get pelicula() {
        return this._pelicula;
    }

    // Getter de la fecha
    get fecha() {
        return this._fecha;
    }

    // Representación en texto de la proyección
    toString() {
        return `${this._fecha.toLocaleDateString()} ${this._fecha.toLocaleTimeString()} => ${this._pelicula.toString()}`;
    }

    // Calcula cuándo termina la película
    getFechaFinPelicula() {

        // Copiamos la fecha de inicio
        const fechaFin = new Date(this._fecha);

        // Sumamos la duración de la película en minutos
        fechaFin.setMinutes(
            fechaFin.getMinutes() + this._pelicula.duracion
        );

        return fechaFin;
    }
}


// ==========================
// CLASE SALA
// ==========================
class Sala {

    // Constructor: inicializa la sala con ID y array vacío
    constructor(idSala) {
        this._idSala = idSala;       // Número de sala
        this._proyecciones = [];     // Lista de proyecciones
    }

    get idSala() {
        return this._idSala;
    }

    // Añadir una proyección a la sala
    añadirProyeccion(proyeccion) {

        // Verificamos que sea una instancia válida
        if (!(proyeccion instanceof Proyeccion)) {
            throw new Error("Solo se pueden añadir objetos de tipo Proyeccion");
        }

        // Si es válida, la añadimos
        this._proyecciones.push(proyeccion);
    }

    // Devuelve proyecciones de un género concreto
    getProyeccionesGenero(genero) {

        return this._proyecciones.filter(
            proy => proy.pelicula.genero === genero
        );
    }

    // Devuelve proyecciones de una fecha concreta
    getProyeccionesFecha(fechaStr) {

        return this._proyecciones.filter(proy => {

            // Convertimos la fecha de la proyección a string
            const fechaProy = proy.fecha.toLocaleDateString();

            // Normalizamos formato (quitamos posibles ceros iniciales)
            const fechaBuscada = fechaStr.replace(/^0/, "");

            return fechaProy === fechaBuscada;
        });
    }
}