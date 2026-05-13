class Persona {

    // A. Propiedades pseudo-internas
    _nombre; // Nombre de la persona
    _edad; // Edad de la persona
    _altura; // Altura de la persona en metros


    // B. Constructor
    constructor(nombre, edad, altura) {
        this._nombre = nombre;
        this._edad = edad;
        this._altura = altura;
    }

    // C.a. Getter nombre debe devolver el nombre en mayúsculas.

    get nombre() {
        return this._nombre.toUpperCase();
    }

    // C.b. Setter nombre(nuevoNombre) debe rechazar cadenas vacías o en blanco (trim()) lanzando en error con el texto pertinente.

    set nombre(nuevoNombre) {
        if (nuevoNombre.trim() == "") throw new Error ("El nombre no puede estar en blanco");
        this._nombre = nuevoNombre;
        
    }

    // C.c. Getter edad devuelve la edad.

    get edad() {
        return this._edad;
    }

    // C.d. Setter edad(nuevaEdad) debe lanzar Error("La edad no puede ser un número negativo") si nuevaEdad< 0.
    
    set edad(nuevaEdad) {
        if (nuevaEdad < 0) {
            throw new Error ("La edad no puede ser un número negativo");
        }
        this._edad = nuevaEdad;
    }

    // C.e. Getter altura devuelve la altura.

    get altura() {
        return this._altura;
    }

    // C.f. Setter altura(nuevaAltura) debe lanzar Error("La altura no puede ser un número negativo") si nuevaAltura < 0.

    set altura(nuevaAltura) {
        if (nuevaAltura < 0) {
            throw new Error ("La altura no puede ser un número negativo");
        }
        this._altura = nuevaAltura;
    }


    // D. Método de instancia

    // D.a toString() debe devolver exactamente: "<nombreOriginal>, <edad> años, altura de <altura>m"

    toString() {
        return `${this._nombre}, ${this._edad} años, altura de ${this._altura}m`
    }

    // E. Comparadores estáticos

    // E.a. cmpNombre (p1, p2) Ordenar alfabéticamente por nombre
    static cmpNombre(p1, p2) {
        return p1._nombre.localeCompare(p2._nombre)
    }

    // E.b. cmpAltura(p1, p2): comparador para ordenar ascendente por altura 
    static cmpAltura(p1, p2) {
        return p1._altura - p2._altura;
    }

    // E.c. cmpEdad(p1, p2): comparador para ordenar ascendente por edad 
    static cmpEdad(p1, p2) {
        return p1._edad - p2._edad;
    }

}