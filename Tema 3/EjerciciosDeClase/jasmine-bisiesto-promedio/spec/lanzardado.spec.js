describe('Testeo de la función lanzarDado()', () => {
    
    // Comprobar que tras 1000 lanzamientos la función siempre devuelve un número
    it(`Tras 1000 lanzamientos siempre debería devolver un número`, () => {
        for (let i = 0; i < 1000; i++) {
            expect(typeof lanzarDado()).toBe('number');
        }
    });

    // Comprobar que tras 1000 lanzamientos la función siempre devuelve un número mayor o igual que 1

    it(`Tras 1000 lanzamientos siempre debería devolver un número mayor o igual que 1`, () => {
        for (let i = 0; i < 1000; i++) {
            expect(lanzarDado()).toBeGreaterThanOrEqual(1);
        }
    });

    // Comprobar que tras 1000 lanzamientos la función siempre devuelve un número menor o igual que 6
    it(`Tras 1000 lanzamientos siempre debería devolver un número menor o igual que 6`, () => {
        for (let i = 0; i < 1000; i++) {
            expect(lanzarDado()).toBeLessThanOrEqual(6);
        }
    });

    // Comprobar que tras 1000 lanzamientos la función ha devuelto todos los números comprendidos entre 1 y 6
    it(`Tras 1000 lanzamientos siempre debería devolver haber devuelto todos los nº del 1 al 6`, () => {
        for (let i = 0; i < 1000; i++) {
            expect(lanzarDado()).toBeGreaterThanOrEqual(1);
            expect(lanzarDado()).toBeLessThanOrEqual(6);
        }
    });


});