class Alumno extends Persona{

    // Propiedades pseudo internas
    _expediente; // Formato "Año/número" ej: "2024/43"
    _notas; // Almacena las ntoas del alumno en un array

    constructor(nombre, edad, altura, expediente, notas = []) {
        
        super(nombre, edad, altura); // Constructor clase padre  Persona

        this._expediente = expediente;
        this._notas = notas; // Es opcional, por defecto es []

    }

    // Getters y setters
    
    get expediente() {
        return this._expediente;
    }

    set expediente(nuevoExpediente) {
        if (nuevoExpediente.trim() == "") {
            throw new Error ("El expediente no puede estar vacío");
        }
        this._expediente = nuevoExpediente;
    }

    get notas() {
        return this._notas;
    }


    // Métodos de instancia

    // Método estatico calcular promedio de un array
    static promedio(array) {
        let suma = 0;
        array.forEach(
            item => suma += item    
        );
        return suma / array.length;
    }

    // Método estático para renonder con un número decimal
    static redondearDecimales(numero, decimales) {
       return Math.round(numero * Math.pow(10, decimales)) / Math.pow(10, decimales);
    }

    notaMedia() {
        if (this._notas.length == 0) {
            return undefined;
        }
        return Alumno.redondearDecimales(Alumno.promedio(this._notas), 1)
    }

    toString() {
        return `${super.toString()}, expediente ${this._expediente} , notas: ${this._notas.join(",")}, nota media: ${this.notaMedia()}`;
    }

    añadirNota(nota) {
        if (typeof nota !== "number") {
            throw new Error ("La nota debe ser un número");
        }
        this._notas.push(nota);
    }

    eliminarNota(posicion) {
        let notaEliminada = this._notas.splice(posicion, 1) [0];
        if (!notaEliminada) {
            throw new Error ("No existe una nota en esa posición")
        }
        return notaEliminada;
    }

    static cmpNotaMedia(a1, a2) {
        return (a1.notaMedia() - a2.notaMedia());
    }

}