const Tarea = require("./tarea");

class ListaTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    if (this.tareas.some((t) => t.descripcion === tarea.descripcion)) {
      throw new Error(`La tarea ya existe.`);
    }
    this.tareas.push(tarea);
  }

  eliminarTarea(tarea) {
    const indice = this.tareas.findIndex(
      (t) => t.descripcion === tarea.descripcion
    );
    if (indice === -1) {
      throw new Error(`No se encontró la tarea.`);
    }
    this.tareas.splice(indice, 1);
  }

  obtenerTareas() {
    return this.tareas;
  }
}

module.exports = ListaTareas;
