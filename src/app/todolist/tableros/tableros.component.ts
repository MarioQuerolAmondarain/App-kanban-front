import { TodolistComponent } from './../todolist/todolist.component';
import { Component, OnInit } from '@angular/core';
import { EstadoTareas } from '../models/estadoTareas.enum';
import { TodolistService } from './../todolist.service';

@Component({
  selector: 'app-tableros',
  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.scss']
})
export class TablerosComponent implements OnInit {
  toDo = EstadoTareas.TODO;
  doing = EstadoTareas.DOING;
  done = EstadoTareas.DONE;

  constructor(public todolistService: TodolistService) { }

  ngOnInit(): void {
  }

}
