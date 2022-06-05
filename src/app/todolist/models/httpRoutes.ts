export class HTTPRoutes{
  static readonly RUTA_GENERAL = "http://localhost:8080/api/tarea/"
  static readonly LISTAR_TAREAS = this.RUTA_GENERAL + "listar-tareas"
  static readonly LISTAR_TAREAS_POR_ESTADO = this.RUTA_GENERAL + "mostrar-por-estado"
  static readonly  ADD_TAREA = this.RUTA_GENERAL + "crear-tarea"
  static readonly  ACTUALIZAR_TAREA = this.RUTA_GENERAL + "actualizar-tarea"
}
