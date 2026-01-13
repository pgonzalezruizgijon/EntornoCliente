class Persona {
    // Propiedades pseudo internas
    _nombre;
    _apellidos;
    _edad;

    constructor(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }

    // Propiedad estática (de clase)
    static  CROMOSOMA=46;

    // Método estático que devuelve la persona con más edad
    static compararPersonas(p1,p2) {
        if(p1.edad >= p2.edad) return p1;
        else return p2;
    }

    cumplirAños() {
        this._edad++;
    }

    toString() {
        return `${this._nombre} de ${this._edad} años`
    }

    // método auxiliar
    getNombre(){
        return this._nombre.toUpperCase();
    }

    // getter del nombre (propiedad)
    get nombre() {
        return this._nombre.toUpperCase();
    }

    get nombreCompleto() {
        return `${this._nombre} ${this._apellidos}`;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad){
        if(nuevaEdad < 0) throw new Error("La edad debe ser un valor positivo");
        this._edad = nuevaEdad;
    }
}


class Empleado extends Persona {
    // Propiedades pseudointernas
    // _nomre;
    // _apellidos;
    // _edad;
    _sueldo;

    constructor(nombre, apellidos, edad, sueldo) {
        // this._nombre=nombre;
        // this._apellidos=apellidos;
        // this._edad=edad;
        super(nombre, apellidos, edad); // Estamos invocando al constructor de la clase padre
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + " y sueldo " + this._sueldo;
    }

}