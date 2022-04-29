export class Examen{
  id: number;
  titulo: string;
  descripcion?: string;
  fechaExamen: Date;

  constructor(id: number, titulo: string, fechaExamen: Date, descripcion?: string){
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaExamen = fechaExamen;
  }
}
