describe("Testeo de la función esBisiesto()", function(){

 // Años que si son bisiestos: 400, 1200, 1904
 // Años que no son bisiestos: 1905, 2015, 2019

 const datos = [
    {año: 400, valorEsperado:true},
    {año: 1200, valorEsperado:true},
    {año: 1904, valorEsperado:true},
    {año: 1905, valorEsperado:true},
    {año: 2015, valorEsperado:true},
    {año: 2019, valorEsperado:true},
 ];

 it ("400 debería ser un año bisiesto", function(){
    expect(esBisiesto(400)).toBeTrue();
 });



})