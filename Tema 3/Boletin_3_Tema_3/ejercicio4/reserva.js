class Reserva {
  constructor(nombre, dni, fechaEntradaStr, fechaSalidaStr) {
    this._nombre = nombre.trim();
    this._dni = dni.trim();
    this._fechaEntrada = this.#parsearFecha(fechaEntradaStr);
    this._fechaSalida = this.#parsearFecha(fechaSalidaStr);
  }

  // Método privado para transformar "dd/mm/yyyy" → Date
  #parsearFecha(fechaStr) {
    const [dia, mes, año] = fechaStr.split("/").map(Number);
    return new Date(año, mes - 1, dia);
  }

  // Getter para el nombre de pila
  get nombrePila() {
    const partes = this._nombre.split(";").map(p => p.trim());
    return partes[2];
  }

  // Getter para el primer apellido
  get apellido1() {
    const partes = this._nombre.split(";").map(p => p.trim());
    return partes[0];
  }

  // Getter para el segundo apellido
  get apellido2() {
    const partes = this._nombre.split(";").map(p => p.trim());
    return partes[1];
  }

  // Getter para el código de cliente
  get codigoCliente() {
    const inicialNombre = this.nombrePila[0].toUpperCase();
    const apellido = this.apellido1.toUpperCase();
    const tresUltimos = this._dni.slice(-3);
    return `${inicialNombre}${apellido}${tresUltimos}`;
  }

  // Getter para el número de días de estancia
  get numeroDiasEstancia() {
    const diffMs = this._fechaSalida - this._fechaEntrada;
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  // Método para modificar fechas
  modificarFechas(nuevaEntradaStr, nuevaSalidaStr) {
    const nuevaEntrada = this.#parsearFecha(nuevaEntradaStr);
    const nuevaSalida = this.#parsearFecha(nuevaSalidaStr);

    if (nuevaSalida <= nuevaEntrada) {
      throw new Error("Fecha de salida debe ser posterior a la de entrada");
    }

    const diffMs = nuevaSalida - nuevaEntrada;
    const diffDias = diffMs / (1000 * 60 * 60 * 24);

    if (diffDias < 1) {
      throw new Error("Estancia mínima debe ser de un día");
    }

    this._fechaEntrada = nuevaEntrada;
    this._fechaSalida = nuevaSalida;
  }

  // Método para calcular el coste de la estancia
  costeEstancia() {
    let total = 0;
    let fechaActual = new Date(this._fechaEntrada);

    while (fechaActual < this._fechaSalida) {
      const diaSemana = fechaActual.getDay(); // 0=domingo, 6=sábado
      if (diaSemana === 0) total += 43; // domingo
      else if (diaSemana === 6) total += 36; // sábado
      else total += 24; // lunes a viernes
      fechaActual.setDate(fechaActual.getDate() + 1);
    }

    return total;
  }
}