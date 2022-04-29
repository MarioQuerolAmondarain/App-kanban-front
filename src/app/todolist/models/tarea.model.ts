import { EstadoTareas } from "./estadoTareas.enum";

export class Tarea{
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: Date;
  estado: EstadoTareas;

  constructor(id: number, titulo: string, descripcion: string, fechaLimite: Date, estado: EstadoTareas){
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
    this.estado = estado;
  }
}
