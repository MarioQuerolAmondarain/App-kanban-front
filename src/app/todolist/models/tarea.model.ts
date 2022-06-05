import { EstadoTareas } from "./estadoTareas.enum";
import { PrioridadTareas } from "./PrioridadTareas.enum";

export class Tarea{
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: Date;
  estado: EstadoTareas;
  prioridad: PrioridadTareas;

  constructor(id: number,titulo: string, descripcion: string, fechaLimite: Date, estado: EstadoTareas, prioridad: PrioridadTareas){
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
    this.estado = estado;
    this.prioridad = prioridad;
  }
}
