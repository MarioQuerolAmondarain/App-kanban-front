import { TodolistService } from './../todolist.service';
import { EstadoTareas } from './../models/estadoTareas.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {
  @Input() estadoTareas!: EstadoTareas;
  ascendente: boolean = true;
  constructor(public todolistService: TodolistService) { }

  ngOnInit(): void {
  }

  filtrarTareas(){
    let tareasFiltradas = this.todolistService.getTareasPorEstado(this.estadoTareas);

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
