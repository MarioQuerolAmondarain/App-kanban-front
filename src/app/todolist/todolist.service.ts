import { HTTPRoutes } from './models/httpRoutes';
import { Errores } from './models/errores.enum';
import { PrioridadTareas } from './models/PrioridadTareas.enum';
import { EstadoTareas } from './models/estadoTareas.enum';
import { Tarea } from './models/tarea.model';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  tareas: Tarea[] = [];

  constructor(private http: HttpClient) {
    this.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    })
  }

  addTarea(nuevaTarea: Tarea){
    this.tareas.push(nuevaTarea);
  }

  updateTarea(tareaActualizada: Tarea){
    this.tareas[this.tareas.findIndex(tarea => {
      return tarea.id === tareaActualizada.id
    })] = tareaActualizada;
  }

  getTareas(): Observable<Tarea[]>{
    return this.http.get(HTTPRoutes.LISTAR_TAREAS).pipe(map((res) => {
      const categories = res as Tarea[];
      return categories?.map(c => new Tarea(c.titulo, c.descripcion, c.fechaLimite, c.estado, c.prioridad));
    }));;
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
  }
}
