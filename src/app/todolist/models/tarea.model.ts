import { formatDate } from "@angular/common";
import { EstadoTareas } from "./estadoTareas.enum";
import { PrioridadTareas } from "./PrioridadTareas.enum";

export class Tarea{
  static contadorTareas: number = 0;
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: Date;
  estado: EstadoTareas;
  prioridad: PrioridadTareas;

  constructor(titulo: string, descripcion: string, fechaLimite: Date, estado: EstadoTareas, prioridad: PrioridadTareas){
    Tarea.contadorTareas++;
    this.id = Tarea.contadorTareas;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
    // this.fechaLimite = this.formatoFecha(fechaLimite);
    this.estado = estado;
    this.prioridad = prioridad;
  }

  private formatoFecha(fecha: Date){
    return formatDate(fecha, 'dd-MM-yyyy', 'en');
  }
}
