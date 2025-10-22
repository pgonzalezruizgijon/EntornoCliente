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
        expect()
    });


}); // Fin describe