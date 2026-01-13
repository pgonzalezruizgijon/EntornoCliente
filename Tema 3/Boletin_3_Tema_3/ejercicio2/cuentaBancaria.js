class CuentaBancaria{
    _titular; // Apellido1 Apellido2, Nombre"
    _cuenta; //  IBAN (dos letras en mayúsculas más dos números), un guión y 20 dígitos numéricos
    _saldo; // Numérico
    
    constructor(titular, cuenta, saldo = 100) {
      this._titular = this._validarTitular(titular);
      this._cuenta = this._validarCuenta(cuenta);
      this._saldo = saldo;
    }
  
    _validarTitular(titular) {
      if (typeof titular !== "string" || titular.trim() === "") {
        throw new Error("El nombre del titular no puede estar vacío.");
      }
      return titular.trim();
    }
  
    _validarCuenta(cuenta) {
      const formatoCuenta = /^[A-Z]{2}\d{2}-\d{20}$/;
      if (!formatoCuenta.test(cuenta)) {
        throw new Error(
          "El número de cuenta no tiene un formato válido. " +
          'Ejemplo correcto: "ES18-38344583721783475844"'
        );
      }
      return cuenta;
    }

    // C. Getters
    get titular(){
        return this._titular;
    }

    get cuenta(){
        return this._cuenta;
    }

    get saldo(){
        return this._saldo;
    }

    // D. nombrePila que devuelva el nombre de pila del cliente
    get nombrePila() {
    // Toma la primera palabra antes del primer espacio
    return this._titular.split(" ")[0];
  }

  // E. Getter que devuelve el primer apellido
  get apellidos() {
    const partes = this._titular.split(" ");
    return partes.length > 1 ? partes[1] : "";
  }

  // F. Método toString() — devuelve info resumida
  toString() {
    return `Titular: ${this._titular}, Cuenta: ${this._cuenta}, Saldo: ${this._saldo.toFixed(2)} €`;
  }

  // G. Getter que devuelve los primeros 4 caracteres del número de cuenta (IBAN)
  get iban() {
    return this._cuenta.substring(0, 4);
  }

  // H. Método ingresar(cantidad)
  ingresar(cantidad) {
    if (typeof cantidad !== "number" || isNaN(cantidad)) {
      throw new Error("La cantidad a ingresar debe ser un número.");
    }
    if (cantidad < 10) {
      throw new Error("La cantidad mínima a ingresar es de 10€.");
    }
    this._saldo += cantidad;
    return this._saldo;
  }

  // I. Método extraer(cantidad)
  extraer(cantidad) {
    if (typeof cantidad !== "number" || isNaN(cantidad)) {
      throw new Error("La cantidad a extraer debe ser un número.");
    }
    if (cantidad > this._saldo) {
      throw new Error("Saldo insuficiente para realizar la extracción.");
    }
    this._saldo -= cantidad;
    return this._saldo;
  }

  // J. Método transferir(cuentaDestino, cantidad)
  transferir(cuentaDestino, cantidad) {
    if (!(cuentaDestino instanceof CuentaBancaria)) {
      throw new Error("El destino debe ser un objeto de tipo CuentaBancaria.");
    }
    if (typeof cantidad !== "number" || isNaN(cantidad)) {
      throw new Error("La cantidad a transferir debe ser un número.");
    }
    if (cantidad > this._saldo) {
      throw new Error("Saldo insuficiente para realizar la transferencia.");
    }

    // realizar la operación
    this.extraer(cantidad);
    cuentaDestino.ingresar(cantidad);

    return {
      origen: this._saldo,
      destino: cuentaDestino._saldo
    };
  }
}