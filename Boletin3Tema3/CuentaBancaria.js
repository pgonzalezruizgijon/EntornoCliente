class CuentaBancaria {

    // Propiedades pseudointernas
    _titular; //Apellido1 Apellido2, Nombre
    _cuenta; // "ES18-<20 dígitos>"
    _saldo; // number

    constructor(titular, cuenta, saldo = 100) {
        if (saldo < 0) throw new Error ("El saldo debe de ser mayor o igual a 0");
        this._titular = titular;
        this._cuenta = cuenta;
        this._saldo = saldo;
    }

    get titular() {
        return this._titular;
    }
    set titular(nuevoTitular) {
        if (nuevoTitular.trim() == "") throw new Error ("El titular no puede ser una cadena vacía");
        this._titular = nuevoTitular;
    }

    get cuenta() {
        return this._cuenta;
    }

    get saldo() {
        return this._saldo;
    }

    get nombrePila() {
        return this._titular.split(", ")[1].trim();
    }

    get apellidos() {
        return this._titular.split(",")[0].trim();
    }

    toString() {
        return `${this._titular} - ${this._cuenta} - Saldo: ${this._saldo}€`;
    }

    get iban() {
        return this._cuenta.slice(0,4);
    }

    ingresar(cantidad) {
        if (cantidad < 10) throw new Error("La cantidad a ingresar no puede ser menor de 10.");
        return this._saldo + cantidad;
    }

    extraer(cantidad) {
        if (cantidad > this._saldo) throw new Error("La cantidad a retirar no puede ser mayor al saldo.");
        return this._saldo - cantidad;
    }

    transferir(cuenta, cantidad) {
        if (!(cuenta instanceof CuentaBancaria)) throw new Error("La cuenta de destino no es válida");
        if (this._saldo < cantidad) throw new Error("No hay saldo suficiente para transferir esa cantidad");
        this.extraer(cantidad);
        cuenta.ingresar(cantidad);
        return { origen: this._saldo, destino: cuenta._saldo }
        
    }

}