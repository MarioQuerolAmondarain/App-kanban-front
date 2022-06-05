import { TodolistService } from './../todolist.service';
import { EstadoTareas } from './../models/estadoTareas.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {
  @Input() estadoTareas!: EstadoTareas;
  ascendente: boolean = true;
  tareas: Tarea[] = [];

  constructor(public todolistService: TodolistService) { }

  ngOnInit(): void {
    this.todolistService.getTareasPorEstado(this.estadoTareas).subscribe(tareas => {
      this.tareas = tareas;
    })
  }

  filtrarTareas(){
    // let tareasFiltradas = this.todolistService.getTareasPorEstado(this.estadoTareas);
    let tareasFiltradas = this.tareas;

    if(this.ascendente){
      return tareasFiltradas.sort(function(a, b) {
        return a.prioridad - b.prioridad;
      });
    }

    return tareasFiltradas.sort(function(a, b) {
      return b.prioridad - a.prioridad;
    });
  }
  getTitulo(): string{
    if(this.estadoTareas === EstadoTareas.TODO){
      return "To Do";
    }
    if(this.estadoTareas === EstadoTareas.DOING){
      return "Doing";
    }
    if(this.estadoTareas === EstadoTareas.DONE){
      return "Done";
    }
    return "";
  }
}
