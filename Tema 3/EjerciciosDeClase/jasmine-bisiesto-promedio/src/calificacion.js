// Función que calcula la calificación ("INSUFICIENTE", "SUFICIENTE", etc.) a partir de un número decimal comprendido entre 0 y 10
// Parámetros:
// - nota: número con decimales
// Retorna: calificación ("INSUFICIENTE", "SUFICIENTE", etc.)
function verCalificacion(nota) {
    // Comprobamos que el argumento esté definido y que sea un número, lanzando excepciones en caso contrario
    if(nota == undefined) throw new Error("Falta el argumento de entrada");
    if(typeof nota != "number") throw new Error("El argumento debe ser un número");

    if (nota >= 0 && nota < 5) return "INSUFICIENTE";
    else if (nota >= 5 && nota < 6) return "SUFICIENTE";
    else if (nota >= 6 && nota < 7) return "BIEN";
    else if (nota >= 7 && nota < 9) return "NOTABLE";
    else if (nota >= 9 && nota <= 10) return "SOBRESALIENTE";
    else return "VALOR INCORRECTO";
}