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
  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
  }
  getTareasToDo(){
    return this.todolistService.getTareasPorFechaYEstado(this.selected, EstadoTareas.TODO);
  }
  getTareasDoing(){
    return this.todolistService.getTareasPorFechaYEstado(this.selected, EstadoTareas.DOING);
  }
  getTareasDone(){
    return this.todolistService.getTareasPorFechaYEstado(this.selected, EstadoTareas.DONE);
  }
  getFecha(): string{
    return formatDate(this.selected, 'dd-MM-yyyy', 'en')
  }
}
