import { TodolistService } from './../todolist.service';
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.component.html',
  styleUrls: ['./todas-tareas.component.scss']
})
export class TodasTareasComponent implements OnInit {
  tareas!: Tarea[];
  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getTareas();

    this.todolistService.tareaAdded.subscribe(tareaAdded => {
      if(tareaAdded){
        this.getTareas();
      }
    })
  }

  getTareas(): void{
    this.todolistService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }
}
