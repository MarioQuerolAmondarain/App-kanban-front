import { EstadoTareas } from './../models/estadoTareas.enum';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { TodolistService } from './../todolist.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selected: Date = new Date();
  tareasTodo: Tarea[] = [];
  tareasDoing: Tarea[] = [];
  tareasDone: Tarea[] = [];
  constructor(private todolistService: TodolistService) {
    this.buscarTareas();
    this.todolistService.tareaAdded.subscribe(tareaAdded => {
      if(tareaAdded){
        this.buscarTareas();
      }
    })
  }

  ngOnInit(): void {
  }
  subscribeTareasToDo(){
    this.todolistService.getTareasPorFechaYEstado(this.selected, EstadoTareas.TODO).subscribe(tareasTodo => {
      this.tareasTodo = tareasTodo;
    });
  }
  subscribeTareasDoing(){
    return this.todolistService.getTareasPorFechaYEstado(this.selected, EstadoTareas.DOING).subscribe(tareasDoing => {
      this.tareasDoing = tareasDoing;
    });
  }
  subscribeTareasDone(){
    return this.todolistService.getTareasPorFechaYEstado(this.selected, EstadoTareas.DONE).subscribe(tareasDone => {
      this.tareasDone = tareasDone;
    });
  }

  getFecha(): string{
    return formatDate(this.selected, 'dd-MM-yyyy', 'en')
  }

  buscarTareas(){
    this.subscribeTareasToDo();
    this.subscribeTareasDoing();
    this.subscribeTareasDone();
  }
}
