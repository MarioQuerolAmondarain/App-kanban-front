import { PrioridadTareas } from './models/PrioridadTareas.enum';
import { EstadoTareas } from './models/estadoTareas.enum';
import { Tarea } from './models/tarea.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  tareas: Tarea[] = [
    new Tarea("Hacer calendario", "Diseñar estructura para el calendario", new Date(), EstadoTareas.TODO, PrioridadTareas.SOMEDAY)
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
