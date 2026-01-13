class Alumno extends Persona{
    // A. Propiedades pseudo internas
    _expediente; // formato "Año/número" ("2024/43")
    _notas; // Array y es opcional. Si no se indica tendrá el valor por defecto []

    // B. Constructor
    constructor(nombre, edad, altura, expediente, notas) {
        super(nombre, edad, altura); // Constructor padre clase persona

        this._expediente = expediente;
        this._notas = notas;
    }

    // C. Getters y setters
    
    // a. Getter expediente
    get expediente() {
        return this._expediente;
    }

    // b. Setter expediente(nuevoExpediente) debe rechazar cadenas vacías o en blanco (trim()) lanzando en error con el texto pertinente.
    set expediente(nuevoExpediente) {
        // Rechazar cadenas vaciás y en blanco
        if(nuevoExpediente.trim() === '') throw new Error('El expediente no puede estar vacío ni contener solo espacios en blanco');
        
        // Solo formato "año/número"
        const partes = nuevoExpediente.split('/');
        if (partes.length !==2 || partes[0].length !== 4) throw new Error ('El formato debe ser "año/número", ej: 2024/43');

        this._expediente = nuevoExpediente;
    }

    // c. Get notas devuelve un array con las notas
    get notas(){
        return this._notas.slice();
    }

    // D. Método de instancia

    // a. notaMedia() debe devolver la nota media del alumno redondeada a un decimal. Si el array no tiene ninguna nota debe devolver undefined
    notaMedia() {
        // Si no hay notas
        if (!this._notas || this._notas.length === 0) {
            return undefined; 
        }

        const suma = this._notas.reduce((acum, nota) => acum + nota, 0);
        const media = suma / this._notas.length;

        // Redondear a un decimal
        return Math.round(media * 10) / 10;
    }

    // b. toString()
    toString() {
        const base = super.toString(); // LLamo al toString padre de la clase Persona

        const notasTexto = this._notas.join(','); // Convierto el array de notas a texto

        return `${base}, expediente ${this._expediente}, notas: ${notasTexto}, nota media: ${this.notaMedia()}`;
    }

    // c. añadirNota(nota) permitirá añadir una nota al alumno. Si la nota no es un número lanzará un error.
    añadirNota(nota){
        if (typeof nota !== 'number' || isNaN(nota)) {
            throw new Error('La nota debe ser un número');
        }
        this._notas.push(nota);
    }

    // d. eliminarNota(posición) permite eliminar una nota en la posició indicada
    //    (siendo 0 la primera nota). El método devolverá la nota eliminada del array. Si
    //    no existe una nota en esa posición lanzar error.

    eliminarNota(posicion) {
        if (typeof posicion !== 'number' || isNaN(posicion)) {
          throw new Error('La posición debe ser un número');
        }
    
        if (posicion < 0 || posicion >= this._notas.length) {
          throw new Error('No existe una nota en esa posición');
        }
    
        const [eliminada] = this._notas.splice(posicion, 1);
        return eliminada;
    }

    // E. Comparadores estáticos
    // a. cmpNotaMedia(a1, a2): comparador para ordenar de mayor a menor por la nota media
    static cmpNotaMedia(a1, a2) {
        return a2.notaMedia - a1.notaMedia;
    }





}