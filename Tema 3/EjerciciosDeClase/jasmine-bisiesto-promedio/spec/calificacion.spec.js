describe('Testeo de la función calificacion()', () => {
    
    // Estructura de datos
    const datos = [
                { nota: -1.5, valorEsperado: "VALOR INCORRECTO" },
                { nota: 0, valorEsperado: "INSUFICIENTE" },
                { nota: 1, valorEsperado: "INSUFICIENTE" },
                { nota: 4.5, valorEsperado: "INSUFICIENTE" },
                { nota: 4.9, valorEsperado: "INSUFICIENTE" },
                { nota: 5, valorEsperado: "SUFICIENTE" },
                { nota: 5.1, valorEsperado: "SUFICIENTE" },
                { nota: 5.9, valorEsperado: "SUFICIENTE" },
                { nota: 6, valorEsperado: "BIEN" },
                { nota: 6.9, valorEsperado: "BIEN" },
                { nota: 7, valorEsperado: "NOTABLE" },
                { nota: 7.9, valorEsperado: "NOTABLE" },
                { nota: 8, valorEsperado: "NOTABLE" },
                { nota: 8.9, valorEsperado: "NOTABLE" },
                { nota: 9, valorEsperado: "SOBRESALIENTE" },
                { nota: 9.9, valorEsperado: "SOBRESALIENTE" },
                { nota: 10, valorEsperado: "SOBRESALIENTE" },
                { nota: 11, valorEsperado: "VALOR INCORRECTO" }
            ];
    // Comprobar que la función lanza una excepción si la invocamos sin argumento de entrada
    it('Debería lanzar una excepción si la invocamos sin argumentos de entrada', () => {
        expect( () => verCalificacion()).toThrowError();
    });

    // Invocamos la función con un argumento que no es de tipo numérico
        it('Debería lanzar una excepción si el argumento no es de tipo numérico', () => {
            expect( () => verCalificacion("hola")).toThrowError();
        });

    // Comprobar que la función devuelve un dato de tipo string para cualquier valor de entrada entre -1 y 11 con saltos de 0.5
    it('La función deberia devolver datos string a cada valor de entrada', () => {
        for (let i = -1; i <= 11; i+= 0.5) {
            const resultado = verCalificacion(i);
            expect(new String(resultado)).toBeInstanceOf(String);
        }
        });

    // Realizar un testeo de caja negra con la siguiente estructura de datos:
    datos.forEach(item => {
        it(`Para la nota ${item.nota}, la calificación es ${item.valorEsperado}`, () => {
            expect(verCalificacion(item.nota)).toBe(item.valorEsperado);
        });

    });


}); // Fin describe