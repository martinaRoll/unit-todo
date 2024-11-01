const Tarea = require("./tarea");

describe("Tarea", () => {
  it("debería crear una tarea con una descripción y completada en falso", () => {
    const tarea = new Tarea("Comprar pan");
    expect(tarea.descripcion).toBe("Comprar pan");
    expect(tarea.completada).toBe(false);
  });

  it("debería marcar la tarea como completada", () => {
    const tarea = new Tarea("Comprar agua");
    tarea.marcarCompletada();
    expect(tarea.completada).toBe(true);
  });
});
