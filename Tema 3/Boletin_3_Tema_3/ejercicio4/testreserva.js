// Si usas Node, importa la clase
const Reserva = require("./reserva.js");

let reserva1 = new Reserva("García;Ortiz;Juan Antonio", "44958625A", "27/02/2020", "03/03/2020");

console.log(reserva1.nombrePila); // "Juan Antonio"
console.log(reserva1.apellido1); // "García"
console.log(reserva1.apellido2); // "Ortiz"
console.log(reserva1.codigoCliente); // "JGARCÍA625"
console.log(reserva1.numeroDiasEstancia); // 5
console.log(reserva1.costeEstancia()); // 151

// Comprobamos que las fechas no cambian
console.log(reserva1._fechaEntrada);
console.log(reserva1._fechaSalida);

// Modificar fechas válidas
reserva1.modificarFechas("28/02/2020", "01/03/2020");
console.log(reserva1.numeroDiasEstancia); // 2

// Casos con error
try {
  reserva1.modificarFechas("02/03/2020", "01/03/2020");
} catch (e) {
  console.log(e.message);
}

try {
  reserva1.modificarFechas("02/03/2020", "02/03/2020");
} catch (e) {
  console.log(e.message);
}