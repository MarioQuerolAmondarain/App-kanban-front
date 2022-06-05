import { HTTPRoutes } from './models/httpRoutes';
import { Errores } from './models/errores.enum';
import { PrioridadTareas } from './models/PrioridadTareas.enum';
import { EstadoTareas } from './models/estadoTareas.enum';
import { Tarea } from './models/tarea.model';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  tareaAdded: Subject<boolean>;
  tareas: Tarea[] = [];
  header = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) {
    this.tareaAdded = new Subject<boolean>();
  }

  addTarea(nuevaTarea: Tarea) {
    this.http
      .post(`${HTTPRoutes.ADD_TAREA}`, JSON.stringify(nuevaTarea), this.header)
      .subscribe((tarea) => {
        this.tareas.push(tarea as Tarea);
        this.tareaAdded.next(true);
      });
  }

  updateTarea(tareaActualizada: Tarea) {
    this.http
      .post(HTTPRoutes.ACTUALIZAR_TAREA, JSON.stringify(tareaActualizada), this.header)
      .subscribe((tareaActualizada) => {
        if (!!tareaActualizada) {
          this.tareaAdded.next(true);
        }
      });
  }

  getTareas(): Observable<Tarea[]> {
    return this.http.get(HTTPRoutes.LISTAR_TAREAS).pipe(
      map((res) => {
        const tareas = res as Tarea[];
        return tareas?.map(
          (c) =>
            new Tarea(
              c.id,
              c.titulo,
              c.descripcion,
              c.fechaLimite as Date,
              c.estado,
              this.castPrioridad(c.prioridad)
            )
        );
      })
    );
  }

  getTareasPorEstado(estado: EstadoTareas): Observable<Tarea[]> {
    return this.http
      .get(HTTPRoutes.LISTAR_TAREAS_POR_ESTADO + '?estado=' + estado)
      .pipe(
        map((res) => {
          const tareas = res as Tarea[];
          return tareas?.map(
            (c) =>
              new Tarea(
                c.id,
                c.titulo,
                c.descripcion,
                c.fechaLimite as Date,
                c.estado,
                this.castPrioridad(c.prioridad)
              )
          );
        })
      );
  }

  getTareasPorFecha(date: Date) {
    return this.tareas.filter((tarea) => {
      return tarea.fechaLimite === date;
    });
  }

  getTareasPorFechaYEstado(date: Date, estado: EstadoTareas) {
    return this.tareas.filter((tarea) => {
      return (
        formatDate(tarea.fechaLimite, 'dd-MM-yyyy', 'en') ===
          formatDate(date, 'dd-MM-yyyy', 'en') && tarea.estado === estado
      );
    });
  }

  deleteTarea(tareaRef: Tarea) {
    this.tareas.splice(
      this.tareas.findIndex((tarea) => {
        return tarea.id === tareaRef.id;
      }),
      1
    );
  }

  private castPrioridad(prioridad: any): PrioridadTareas {
    if (prioridad == 'SOMEDAY') {
      return PrioridadTareas.SOMEDAY;
    }
    if (prioridad == 'LOW') {
      return PrioridadTareas.LOW;
    }
    if (prioridad == 'MEDIUM') {
      return PrioridadTareas.MEDIUM;
    }
    if (prioridad == 'HIGH') {
      return PrioridadTareas.HIGH;
    }

    return PrioridadTareas.VERYHIGH;
  }
}
