import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstadoTareas } from '../models/estadoTareas.enum';
import { PrioridadTareas } from '../models/PrioridadTareas.enum';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.component.html',
  styleUrls: ['./tarea-detalles.component.scss']
})
export class TareaDetallesComponent implements OnInit {
  tarea!: Tarea;

  estadosTarea = {
    toDo: EstadoTareas.TODO,
    doing: EstadoTareas.DOING,
    done: EstadoTareas.DONE
  };
  prioridadesTarea = {
    someday: PrioridadTareas.SOMEDAY,
    low: PrioridadTareas.LOW,
    medium: PrioridadTareas.MEDIUM,
    high: PrioridadTareas.HIGH,
    veryhigh: PrioridadTareas.VERYHIGH
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tarea = this.data.tarea;
  }
  editarTarea(){
  }
}
