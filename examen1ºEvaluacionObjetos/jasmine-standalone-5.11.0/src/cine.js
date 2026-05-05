class Pelicula {
    static GENERO_HISTORIA = 0;
    static GENERO_SCFI = 1;
    static GENERO_COMEDIA = 2;

    constructor(id, titulo, genero, director, duracion) {
        this._id = id;
        this._titulo = titulo;
        this._genero = genero;
        this._director = director;
        this._duracion = duracion;
    }

    get id() { return this._id; }
    get titulo() { return this._titulo; }
    get genero() { return this._genero; }
    get director() { return this._director; }
    get duracion() { return this._duracion; }

    toString() {
        return `${this._titulo} (${this._duracion} min.)`;
    }
}

class Proyeccion {
    constructor(pelicula, fechaStr, horaStr) {
        this._pelicula = pelicula;

        const [dia, mes, anio] = fechaStr.split("/").map(Number);
        const [hora, minutos] = horaStr.split(":").map(Number);

        this._fecha = new Date(anio, mes - 1, dia, hora, minutos);
    }

    get pelicula() { return this._pelicula; }
    get fecha() { return this._fecha; }

    toString() {
        return `${this._fecha.toLocaleDateString()} ${this._fecha.toLocaleTimeString()} => ${this._pelicula.toString()}`;
    }

    getFechaFinPelicula() {
        const fechaFin = new Date(this._fecha);
        fechaFin.setMinutes(fechaFin.getMinutes() + this._pelicula.duracion);
        return fechaFin;
    }
}

class Sala {
    constructor(idSala) {
        this._idSala = idSala;
        this._proyecciones = [];
    }

    get idSala() { return this._idSala; }

    añadirProyeccion(proyeccion) {
        if (!(proyeccion instanceof Proyeccion)) {
            throw new Error("Solo se pueden añadir objetos de tipo Proyeccion");
        }

        this._proyecciones.push(proyeccion);
    }

    getProyeccionesGenero(genero) {
        return this._proyecciones.filter(
            proy => proy.pelicula.genero === genero
        );
    }

    getProyeccionesFecha(fechaStr) {
        return this._proyecciones.filter(proy => {
            return proy.fecha.toLocaleDateString() === fechaStr.replace(/^0/, "");
        });
    }
}