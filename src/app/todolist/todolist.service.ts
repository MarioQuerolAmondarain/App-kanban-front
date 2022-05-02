import { EstadoTareas } from './models/estadoTareas.enum';
import { Tarea } from './models/tarea.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  tareas: Tarea[] = [
    new Tarea("Sacar al perro", "Que bonito día de lluvia", new Date, EstadoTareas.TODO),
    new Tarea("Hacer deberes", "", new Date, EstadoTareas.TODO),
    new Tarea("Hacer la compra", "Leche, Huevos, Cafe, etc", new Date, EstadoTareas.DOING),
    new Tarea("Leer", "Clean code", new Date, EstadoTareas.DONE)
  ];

  constructor() { }

  addTarea(nuevaTarea: Tarea){
    this.tareas.push(nuevaTarea);
  }

  getTareas(): Tarea[]{
    return this.tareas;
  }

  getTareasPorEstado(estado :EstadoTareas): Tarea[]{
    return this.tareas.filter((tarea) => {
      return tarea.estado === estado;
    });
  }

}
