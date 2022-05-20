import { Errores } from './models/errores.enum';
import { PrioridadTareas } from './models/PrioridadTareas.enum';
import { EstadoTareas } from './models/estadoTareas.enum';
import { Tarea } from './models/tarea.model';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  tareas: Tarea[] = [
    // new Tarea("Hacer calendario", "Diseñar estructura para el calendario", new Date(), EstadoTareas.TODO, PrioridadTareas.MEDIUM)
  ];

  constructor() { }

  addTarea(nuevaTarea: Tarea){
    this.tareas.push(nuevaTarea);
  }

  updateTarea(tareaActualizada: Tarea){
    this.tareas[this.tareas.findIndex(tarea => {
      return tarea.id === tareaActualizada.id
    })] = tareaActualizada;
  }

  getTareas(): Tarea[]{
    return this.tareas;
  }

  getTareasPorEstado(estado :EstadoTareas): Tarea[]{
    return this.tareas.filter((tarea) => {
      return tarea.estado === estado;
    });
  }

  getTareasPorFecha(date: Date){
    return this.tareas.filter((tarea) => {
      return tarea.fechaLimite === date;
    });
  }

  getTareasPorFechaYEstado(date: Date, estado: EstadoTareas){
    return this.tareas.filter((tarea) => {
      return formatDate(tarea.fechaLimite, 'dd-MM-yyyy', 'en') === formatDate(date, 'dd-MM-yyyy', 'en')  && tarea.estado === estado;;
    });
  }
}
