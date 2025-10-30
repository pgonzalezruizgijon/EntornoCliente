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
        if (partes.length !==2 || partes[0].length !== 4) throw new error ('El formato debe ser "año/número", ej: 2024/43');

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



}