// Calcula el perímetro y área de un círculo y lo devuelve en un literal de objeto con la estructura {perimetro:<valor>, area:<valor>}
function calcularCirculo(radio) {
    // Validamos el parámetro radio(que esté definido, que sea un número y que sea positivo)
    if (radio == undefined) throw new Error("Falta el parámetro radio");
    if (typeof radio != 'number') throw new Error("El parámetro radio no es un número");
    if (radio < 0) throw new Error("El radio no puede ser negativo");
    return { perimetro: 2 * Math.PI * radio, area: Math.PI * Math.pow(radio, 2) }; // Devolvemos un objeto
}