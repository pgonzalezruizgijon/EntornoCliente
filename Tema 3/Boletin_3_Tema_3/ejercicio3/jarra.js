class Jarra {
  constructor(capacidad, cantidad) {
    if (typeof capacidad !== "number" || capacidad <= 0) {
      throw new Error("La capacidad debe ser un número positivo mayor que 0.");
    }
    if (typeof cantidad !== "number" || cantidad < 0) {
      throw new Error("La cantidad inicial debe ser un número positivo o 0.");
    }
    if (cantidad > capacidad) {
      cantidad = capacidad; // Si se pasa más de la capacidad, se llena al máximo
    }

    this._capacidad = capacidad;
    this._cantidad = cantidad;
  }

  // B. Getters
  get capacidad() {
    return this._capacidad;
  }

  get cantidad() {
    return this._cantidad;
  }

  // C. Setter
  set cantidad(valor) {
    if (typeof valor !== "number") {
      throw new Error("La cantidad debe ser un número.");
    }
    if (valor < 0) {
      throw new Error("La cantidad debe ser un número positivo.");
    }
    if (valor > this._capacidad) {
      this._cantidad = this._capacidad;
    } else {
      this._cantidad = valor;
    }
  }

  // D. llenar()
  llenar() {
    this._cantidad = this._capacidad;
  }

  // E. vaciar()
  vaciar() {
    this._cantidad = 0;
  }

  // F. llenarDesde(otraJarra)
  llenarDesde(otraJarra) {
    if (!(otraJarra instanceof Jarra)) {
      throw new Error("El argumento debe ser una instancia de Jarra.");
    }

    const espacioDisponible = this._capacidad - this._cantidad;

    // Cantidad que podemos trasvasar
    const cantidadTransferible = Math.min(espacioDisponible, otraJarra._cantidad);

    this._cantidad += cantidadTransferible;
    otraJarra._cantidad -= cantidadTransferible;
  }

  // G. Método estático comparar(j1, j2)
  static comparar(j1, j2) {
    if (!(j1 instanceof Jarra) || !(j2 instanceof Jarra)) {
      throw new Error("Ambos argumentos deben ser objetos de tipo Jarra.");
    }

    return j1._cantidad >= j2._cantidad ? j1 : j2;
  }

  // H. jarrasConMasCantidad(...jarras)
  jarrasConMasCantidad(...jarras) {
    return jarras
      .filter(j => j instanceof Jarra && j._cantidad > this._cantidad)
      .sort((a, b) => b._cantidad - a._cantidad);
  }

  // I. toString()
  toString() {
    return `Jarra(capacidad: ${this._capacidad}L, cantidad: ${this._cantidad}L)`;
  }
}

function probarClaseJarra() {
  console.log("=== INICIO DE TESTEO ===");

  const jarra1 = new Jarra(10, 4);
  const jarra2 = new Jarra(15, 8);

  // Comparar
  let jarraConMasCantidad = Jarra.comparar(jarra1, jarra2);
  console.log(`Jarra con más cantidad: ${jarraConMasCantidad}`); // jarra2

  // llenarDesde
  jarra1.llenarDesde(jarra2);
  console.log(`cantidad jarra1: ${jarra1.cantidad} (Debería mostrar 10 litros)`);
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 2 litros)`);

  // llenar()
  jarra2.llenar();
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`);

  // vaciar()
  jarra2.vaciar();
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 0 litros)`);

  // Asignar cantidad mayor a la capacidad
  jarra2.cantidad = 30;
  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`);

  // Intentar asignar valor negativo
  try {
    jarra2.cantidad = -10;
  } catch (error) {
    console.log(`Se produjo el error: "${error.message}"`);
  }

  console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`);

  // Probar jarrasConMasCantidad
  const jarra3 = new Jarra(20, 18);
  const jarra4 = new Jarra(12, 5);
  const resultado = jarra1.jarrasConMasCantidad(jarra2, jarra3, jarra4);
  console.log("\nJarras con más cantidad que jarra1:", resultado.map(j => j.toString()));

  console.log("=== FIN DE TESTEO ===");
}

// Ejecutar pruebas
probarClaseJarra();
