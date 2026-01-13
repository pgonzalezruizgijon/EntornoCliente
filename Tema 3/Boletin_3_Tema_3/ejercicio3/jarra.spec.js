describe("Clase Jarra", function () {
  it("debe crear una jarra con capacidad y cantidad correctas", function () {
    const j = new Jarra(10, 4);
    expect(j.capacidad).toBe(10);
    expect(j.cantidad).toBe(4);
  });

  it("debe llenar correctamente desde otra jarra", function () {
    const j1 = new Jarra(10, 4);
    const j2 = new Jarra(15, 8);
    j1.llenarDesde(j2);
    expect(j1.cantidad).toBe(10);
    expect(j2.cantidad).toBe(2);
  });

  it("debe comparar correctamente dos jarras", function () {
    const j1 = new Jarra(10, 4);
    const j2 = new Jarra(15, 8);
    expect(Jarra.comparar(j1, j2)).toBe(j2);
  });
});
