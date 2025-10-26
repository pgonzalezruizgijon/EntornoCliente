describe('Testeo de la funcion calcularCirculo()', () => {

    // Observación: en los valores esperados, el perímetro y el área están redondeados a dos decimales
    const datos = [
    { radio: 1.4, valorEsperado: { perimetro: 8.80, area: 6.16 } },
    { radio: 2.7, valorEsperado: { perimetro: 16.96, area: 22.90 } },
    { radio: 5.37, valorEsperado: { perimetro: 33.74, area: 90.59 } },
    { radio: 10.412, valorEsperado: { perimetro: 65.42, area: 340.58 } },
    { radio: 12.2334, valorEsperado: { perimetro: 76.86, area: 470.16 } },
    ];

    
    // Comprobar que la función lanza una excepción si la invocamos sin argumento de entrada
    it('Debería lanzar una excepción si la invocamos sin argumentos de entrada', () => {
        expect( () => calcularCirculo()).toThrowError();
    });

    // Comprobar que la función lanza una excepción si la invocamos con un argumento que sea un número negativo
    it('Debería lanzar una excepción si el argumento no es de tipo numérico', () => {
        expect( () =>calcularCirculo(-3)).toThrowError();
    });

    // Comprobar que la función devuelve un objeto
    it('La función debería devolver un objeto', () => {
        expect(calcularCirculo(6)).toBeInstanceOf(Object);
    });

    // Comprobar que el objeto devuelto por la función contiene una propiedad llamada perimetro
    it('El objeto devuelto por la función debería contener una propiedad llamada perimetro', () => {
        const resultado = calcularCirculo(4);
        expect(resultado.perimetro).toBeDefined();
    });

    // Comprobar que el objeto devuelto por la función contiene una propiedad llamada area
    it('El objeto devuelto por la función debería contener una propiedad llamada area', () => {
        const resultado = calcularCirculo(4);
        expect(resultado.area).toBeDefined();
    });

    // Realizar un testeo de caja negra con la siguiente estructura de datos, en la cuál el perímetro y el área están redondeados a dos decimales:
    datos.forEach(item => {
        it(`Con el radio ${item.radio}, el perimetro es ${item.valorEsperado.perimetro} y el area es ${item.valorEsperado.perimetro} `, () => {
            const resultado = calcularCirculo(item.radio);

            expect(resultado.perimetro).toBeCloseTo(item.valorEsperado.perimetro, 2);
            expect(resultado.area).toBeCloseTo(item.valorEsperado.area, 2);
        });
    });




}); // Fin describe