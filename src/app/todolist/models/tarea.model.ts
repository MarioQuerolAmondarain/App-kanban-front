import { EstadoTareas } from "./estadoTareas.enum";

export class Tarea{
  static contadorTareas: number = 0;
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: Date;
  estado: EstadoTareas;

  constructor(titulo: string, descripcion: string, fechaLimite: Date, estado: EstadoTareas){
    Tarea.contadorTareas++;
    this.id = Tarea.contadorTareas;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
    this.estado = estado;
  }
}
