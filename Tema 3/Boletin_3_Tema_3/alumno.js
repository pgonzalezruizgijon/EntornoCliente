class Alumno {
    // Propiedades pseudo internas
    _expediente; // formato "Año/número" ("2024/43")
    _notas; // Array

    // Constructor
    constructor(nombre, edad, altura, expediente, notas) {
        this._nombre = nombre;
        this._edad = edad;
        this._altura = altura;
        this._expediente = expediente;
        this._notas = notas;
    }

}