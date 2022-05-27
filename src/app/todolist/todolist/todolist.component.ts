import { TodolistService } from './../todolist.service';
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  panelOpenState=false;
  tareas!: Tarea[];

  constructor(public todolistService: TodolistService) {
    this.todolistService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    })
  }

  ngOnInit(): void {
  }

}
