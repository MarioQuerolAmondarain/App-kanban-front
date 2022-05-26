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
  ];

  constructor() {
    this.tareas = this.getTareas();
  }

  addTarea(nuevaTarea: Tarea){
    this.tareas.push(nuevaTarea);
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  updateTarea(tareaActualizada: Tarea){
    this.tareas[this.tareas.findIndex(tarea => {
      return tarea.id === tareaActualizada.id
    })] = tareaActualizada;
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  getTareas(): Tarea[]{
    let tareas = localStorage.getItem("tareas");

    if(!tareas){
      return [];
    }

    return JSON.parse(tareas) as Tarea[];
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

  deleteTarea(tareaRef: Tarea){
    this.tareas.splice(this.tareas.findIndex((tarea) => {
      return tarea.id === tareaRef.id
    }), 1);
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }
}
