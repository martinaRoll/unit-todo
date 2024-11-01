const ListaTareas = require("./ListaTareas");
const Tarea = require("./tarea");

describe("ListaTareas", () => {
  let listaTareas;

  beforeEach(() => {
    listaTareas = new ListaTareas();
  });

  it("debería agregar una tarea si no existe otra con la misma descripción", () => {
    const tarea = new Tarea("Comprar leche");
    listaTareas.agregarTarea(tarea);
    expect(listaTareas.obtenerTareas()).toContain(tarea);
  });

  it("debería lanzar un error al intentar agregar una tarea duplicada", () => {
    const tarea1 = new Tarea("Comprar leche");
    const tarea2 = new Tarea("Comprar leche");
    listaTareas.agregarTarea(tarea1);
    expect(() => listaTareas.agregarTarea(tarea2)).toThrow(
      "La tarea ya existe."
    );
  });

  it("debería eliminar la tarea, si la tarea ya existe", () => {
    const tarea = new Tarea("Ordenar el cuarto");
    listaTareas.agregarTarea(tarea);
    listaTareas.eliminarTarea(tarea);

    expect(listaTareas.obtenerTareas().length).toBe(0);
  });

  it("debería lanzar una excepción si quiero eliminar tarea que no existe", () => {
    const tarea = new Tarea("Ordenar el cuarto");
    expect(() => listaTareas.eliminarTarea(tarea)).toThrow(
      "No se encontró la tarea."
    );
  });

  it("debería devolver todas las tareas", () => {
    const tarea1 = new Tarea("Comprar leche");
    const tarea2 = new Tarea("Ordenar el cuarto");

    listaTareas.agregarTarea(tarea1);
    listaTareas.agregarTarea(tarea2);

    const tareas = listaTareas.obtenerTareas();
    expect(tareas).toContain(tarea1);
    expect(tareas).toContain(tarea2);
  });
});
