function arraySinDuplicados(array) {
    if (array == undefined) throw new Error("Falta el parámetro array");
    if (!Array.isArray(array)) throw new Error("El parámetro array no es un array");
    for (const item of array) { // Bucle para verificar que cada elemento sea un número
        if (typeof item !== 'number') {
            throw new Error("El array contiene elementos que no son números");
        }
    }
    return array.filter((item, index) => array.indexOf(item) === index).sort((a, b) => a - b);
    
}
