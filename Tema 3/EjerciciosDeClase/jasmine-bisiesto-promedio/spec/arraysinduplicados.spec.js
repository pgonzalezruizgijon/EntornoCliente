describe('Testeo de la función arraySinDuplicados()', () => {

    const datos = [
        {arrayEntrada: [2, 3, 2, 3, -1], valorEsperado:[-1, 2, 3]},
        {arrayEntrada: [5, 5, -2, 1, -3, 1, -3], valorEsperado:[-3, -2, 1, 5]},
        {arrayEntrada: [0, 12 , -2, 0, -2, 1, 1], valorEsperado:[-2, 0, 1, 12]},
    ];

    
    // Comprobar que lanza una excepción si no le pasamos ningún argumento
    it('Debería lanzar una excepción al invocarse sin argumentos', () => {
        expect( () => arraySinDuplicados()).toThrowError();
    });
    // Comprobar que lanzar una excepción si el argumento de entrada no es un array
    it('Debería lanzar una excepción si el argumento no es de tipo numérico', () => {
            expect( () => verCalificacion("hola")).toThrowError();
    });

    // Comprobar que lanzar una excepción si el array de entrada contiene algún elemento que no sea un número
    it('Debería lanzar una excepción si el array contiene elementos que no sean números', () => {
            expect( () => verCalificacion([1, 2, "hola", 4])).toThrowError();
    });

    // Testeo de caja negra
    datos.forEach(item => {
        it(`Para el array [${item.arrayEntrada.join(",")}] el valor esperado es [${item.valorEsperado.join(",")}]`, () => {
        expect(arraySinDuplicados(item.arrayEntrada)).toEqual(item.valorEsperado);
        });
    });




});