describe('Testo de la funcioón promedio', () => {
    
     function redondeado(num, decimales){
            return Math.round(num * Math.pow(10,decimales))
        }

    // El valor esperado esá redondeado
    const datos = [
        {entrada:[7.2, 4.3, 9.1] , valorEsperado:6.9 }
        // {entrada:[3.2, , , 5.3, 9.7] , valorEsperado:    6.1 },
        // {entrada:[4.6, 7.2, 2.7, 3.1, 5.7] , valorEsperado: 4.7},
        // {entrada:[8.18, ,] , valorEsperado: 8.2}
    ];

    datos.forEach(

        (item) => {

            it(`Para el array [${item.entrada.join(",")}] el promedio esperado es ${item.valorEsperado}`, () => {

                //expect( promedio(item.entrada) ).toEqual(item.valorEsperado);

                  expect(promedio(item.entrada)).toBeCloseTo(item.valorEsperado,1)

            });//Fin it

        }

    )//Fin forEach
    
    // Comprobamos que la función devuelva un número
    it('Debería devolver un número', () => {
        expect(promedio([5, 3, 8])).toBeInstanceOf(Number);
    });

    // Comprobamos que la función no devuelva un NaN cuadno pasamos un array disperso

    it('No debería devolver NaN si le pasamos un array', () => {
        //Nosotros redondeamos a un decimal antes de comparar
        expect(promedio([5,3,,,8])).not.toBeNaN();
        //Usando el matcher toBeCloseTo de Jasmine

    });

    // Comprobar que la función lanza una excepción si se le pasa un argumento que no sea un array
    it('La función debería lanzar una excepción si se le pasa un argumento que no sea un array', () => {
        expect(() => promedio(1)).toThrowError();
    });

    // Comprobar que la función lanza una excepción si le pasamos un array en el que no todos los elementos son números (p. ej. [5, 6, "hola"]
    it('La función debería lanzar una excepción si le pasamos un array en el que no todos los elementos son números', () => {
        expect(() => promedio([5, 6, "hola"])).toThrowError();
    });

});//Fin describe