describe('Testo de la funcioón promedio', () => {
    
     function redondeado(num, decimales){

            return Math.round(num * Math.pow(10,decimales))

        }

    //El valor esperado esá redondeado
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

    //Comprobamos que la función no devuelva un NaN cuadno pasamos un array disperso

    it('No debería devolver NaN s ile pasamos un array', () => {
        //Nostros redeondeamo a un dedcimal antes de comparar
        expect(promedio([5,3,,,8])).not.toBeNaN();
        //Usando el matcher toBeCloseTo de Jasmine

      

    });

});//Fin describe