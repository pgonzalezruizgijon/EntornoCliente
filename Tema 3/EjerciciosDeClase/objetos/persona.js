class Persona {
    // Propiedades pseudo internas
    _nombre;
    _apellidos;
    _edad;

    constructor(nombre, edad) {
        this._nombre=nombre;
        this._apellidos=this._apellidos;
        this._edad=edad;
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
        return `$(this._nombre) de $(this._edad) años`
    }

    getNombre(){
        return this_nombre.toUpperCase();
    }

    get nombre() {
        return this_nombre.toUpperCase();
    }

    get nombreCompleto() {
        return `$(this._nombre) $(this.apellidos)`;
    }

    set edad(nuevaEdad){
        if(nuevaEdad < 0) throw new Error("La edad debe ser un valor positivo")
        this_edad=nuevaEdad;
    }
}

// const persona1 = new Persona("Juan", 32);
// const persona2 = new Persona("Ana", 35);