describe('Testo de la clase CuentaBancaria', () => {

    let cuenta1,cuenta2;

    // No deben crear las instancias fueras de un beforeEach porque porque no sabemos el orden de ejecución de los it (aleatorios)
    // cuenta1=new CuentaBancaria("Javier", "ES18-12345678901234567890", 1000)
    // cuenta2=new CuentaBancaria("Rocio", "ES18-12345678901234567890", 2000)

    // Este bloque se ejecuta antes de cada it
    // Setup
    beforeEach(() => {
        cuenta1=new CuentaBancaria("Javier", "ES18-12345678901234567890", 1000);
        cuenta2=new CuentaBancaria("Rocio", "ES18-12345678901234567890", 2000);
    });

    // Teardown
    afterEach(() => {
        cuenta1=null;
        cuenta2=null;
    });

    // EL getter titular debería devolver el nombre en mayúsculas
    it('El getter titular de cuenta1 deberia devolver JAVIER', () => {
        expect(cuenta1.titular).toEqual("JAVIER");
    });

    // El método extraer debería lanzar un error si la cantidad es mayor al saldo
    it('El método extraer debería lanzar un error si la cantidad es mayor al saldo', () => {
        expect(()=>{ cuenta1.extraer(1150)}).toThrowError();
    });

    // Testeo del módulo ingresar
    it('El saldo en cuenta1 tras ingresar 70€ debería ser 1070€', () => {
        cuenta1.ingresar(70);
        expect(cuenta1.saldo).toEqual(1070);
    });

    // Tras transferir 50€ de cuenta1 a cuenta2
    it('Tras realizar una transferencia de 50€ a cuenta2 en cuenta1 debería haber 1020 y en cuenta2 2050', () => {
        cuenta1.transferirA(cuenta2,50);
        expect(cuenta1.saldo).toEqual(950);
        expect(cuenta2.saldo).toEqual(2050);
    });




});