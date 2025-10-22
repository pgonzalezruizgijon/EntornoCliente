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

 // Comprobar que la función devuelve un booleano
 it('La función debería devolver un booleano', () => {
   expect(esBisiesto(2025)).toBeInstanceOf(Boolean);
 });

 // Comprobar que la función lanza una excepción cuando la invocamos sin argumentis
 it('La función debería lanzar una excepción cuando la invocamos sin argumento'), () => {
   expect( () => (esBisiesto()).toThrowError());
 }

  // Comprobar que lanza excepción con año negativo
  it('La función debería lanzar una excepción cuando la invocamos con un año negativo', () => {
    expect(() => esBisiesto(-10)).toThrowError();
  });



})