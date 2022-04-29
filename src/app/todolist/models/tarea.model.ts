export class Tarea{
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: Date;

  constructor(id: number, titulo: string, descripcion: string, fechaLimite: Date){
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaLimite = fechaLimite;
  }
}
