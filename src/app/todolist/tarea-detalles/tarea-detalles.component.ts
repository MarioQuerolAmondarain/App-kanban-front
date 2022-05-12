import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TodolistService } from './../todolist.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrioridadTareas } from '../models/PrioridadTareas.enum';
import { Tarea } from '../models/tarea.model';
import { EstadoTareas } from './../models/estadoTareas.enum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.component.html',
  styleUrls: ['./tarea-detalles.component.scss'],
})
export class TareaDetallesComponent implements OnInit {
  tarea!: Tarea;
  editarFechaForm!: FormGroup;

  estadosTarea = {
    toDo: EstadoTareas.TODO,
    doing: EstadoTareas.DOING,
    done: EstadoTareas.DONE,
  };
  prioridadesTarea = {
    someday: PrioridadTareas.SOMEDAY,
    low: PrioridadTareas.LOW,
    medium: PrioridadTareas.MEDIUM,
    high: PrioridadTareas.HIGH,
    veryhigh: PrioridadTareas.VERYHIGH,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private todolistService: TodolistService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.tarea = this.data.tarea;
    this.initFechaLimiteForm();
  }
  editarTarea() {}

  actualizarPrioridad(estado: EstadoTareas) {
    let tareaActualizada = {
      id: this.tarea.id,
      titulo: this.tarea.titulo,
      descripcion: this.tarea.descripcion,
      fechaLimite: this.tarea.fechaLimite,
      estado: estado,
      prioridad: this.tarea.prioridad,
    } as Tarea;
    this.todolistService.updateTarea(tareaActualizada);

    this.snackBar.open('¡Tarea modificada!', '', {
      duration: 2000,
    });
  }

  actualizarFecha() {
    let fecha = this.editarFechaForm.get('fechaLimite')?.value;
    if(!fecha){
      return;
    }

    let tareaActualizada = {
      id: this.tarea.id,
      titulo: this.tarea.titulo,
      descripcion: this.tarea.descripcion,
      fechaLimite: formatDate(fecha, 'dd-MM-yyyy', 'en'),
      estado: this.tarea.estado,
      prioridad: this.tarea.prioridad,
    } as Tarea;
    this.todolistService.updateTarea(tareaActualizada);

    this.snackBar.open('¡Tarea modificada!', '', {
      duration: 2000,
    });

    this.editarFechaForm.get('fechaLimite')?.reset();
  }

  initFechaLimiteForm() {
    this.editarFechaForm = new FormGroup({
      fechaLimite: new FormControl('', [Validators.required]),
    });
  }
}
