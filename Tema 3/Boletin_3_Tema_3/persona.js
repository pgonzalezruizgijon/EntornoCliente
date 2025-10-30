class Persona {
    // Propiedades pseudo internas
    _nombre; // String
    _edad; // Número entero
    _altura; // En metros (decimal)

    //Constructor
    constructor(nombre, edad, altura) {

        
        this._nombre = nombre;
        this._edad = edad;
        this._altura = altura;
        // super(nombre, edad, altura);
    }

    //a. Getter nombre debe devolver el nombre en mayúsculas.
    get nombre(){
        return this._nombre.toUpperCase();
    }

    //b. Setter nombre(nuevoNombre) debe rechazar cadenas vacías o en blanco (trim()) lanzando en error con el texto pertinente.
    set nombre(nuevoNombre){
        if(nuevoNombre.trim() === '') {
            throw new Error('El nombre no puede estar vacío ni contener solo espacios en blanco')
        } else if (typeof nuevoNombre != 'string'){
            throw new Error('El nombre debe de ser texto')
        }
        this._nombre = nuevoNombre.trim(); // Elimina los espacios innecesarios antes y despues del texto
    }

    // c. Get edad devuelve la edad.
    get edad() {
        return this._edad;
    }

    // d. Setter edad(nuevaEdad) debe lanzar Error("La edad no puede ser un número negativo") si nuevaEdad< 0.
    set edad(nuevaEdad){
        if(nuevaEdad < 0) throw new Error("La edad debe ser un valor positivo");
        if(typeof nuevaEdad != 'number') throw new Error("La edad debe ser un número entero"); 
        this._edad = nuevaEdad;
    }

    // e. Getter altura devuelve la altura.
    get altura() {
        return this._altura;
    }

    // f. Setter altura(nuevaAltura) debe lanzar Error("La altura no puede ser un número negativo") si nuevaAltura < 0.
    set altura(nuevaAltura) {
    if (typeof nuevaAltura !== 'number' || Number.isNaN(nuevaAltura)) {
        throw new Error("La altura debe ser un número decimal");
    }
    if (nuevaAltura <= 0 || nuevaAltura >= 2.10) {
        throw new Error("La altura debe ser un valor positivo en metros (decimal) y realista");
    }
    this._altura = nuevaAltura;
    }

    //     D. Método de instancia
    // a. toString() debe devolver exactamente:
    // "<nombreOriginal>, <edad> años, altura de <altura>m"
    toString() {
        return this._nombre + ", " + this._edad + " años, altura de " + this._altura + "m"
    }

    // a. cmpNombre(p1, p2): comparador para ordenar alfabéticamente por nombre. (usa localeCompare() como comparador de strings).
    static cmpNombre(p1, p2) {
        // localeCompare devuelve: -1 si p1 < p2, 0 si son iguales, 1 si p1 > p2
        return p1.nombre.localeCompare(p2.nombre);
    }
    // b. cmpAltura(p1, p2): comparador para ordenar ascendente por altura (número).

    static cmpAltura(p1, p2) {
        return p1.altura - p2.altura; // ascendente
    }

    // c. cmpEdad(p1, p2): comparador para ordenar ascendente por edad (número)
    static cmpEdad(p1, p2) {
        return p1.edad - p2.edad;
    }

}
