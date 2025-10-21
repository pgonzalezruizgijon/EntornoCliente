describe("Testeo de la función esBisiesto()", function(){

 // Años que si son bisiestos: 400, 1200, 1904
 // Años que no son bisiestos: 1905, 2015, 2019

 const datos = [
    {año: 400, valorEsperado:true},
    {año: 1200, valorEsperado:true},
    {año: 1904, valorEsperado:true},
    {año: 1905, valorEsperado:false},
    {año: 2015, valorEsperado:false},
    {año: 2019, valorEsperado:false},
 ];

 /*
 it ("400 debería ser un año bisiesto", function(){
    expect(esBisiesto(400)).toBeTrue();
 });

  it ("400 debería ser un año bisiesto", function(){
    expect(esBisiesto(1905)).toBeFalse();
 });
 */

 datos.forEach(
   (item) => {
      it (`El año ${item.año} ${item.valorEsperado? "sí":"no"} debería ser bisiesto`, function() {
         expect(esBisiesto(item.año)).toEqual(item.valorEsperado);
      })
   }
 )



})