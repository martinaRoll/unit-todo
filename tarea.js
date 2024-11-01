class Tarea {
  constructor(descripcion) {
    this.descripcion = descripcion;
    this.completada = false;
  }

  marcarCompletada() {
    this.completada = true;
  }
}

module.exports = Tarea;
