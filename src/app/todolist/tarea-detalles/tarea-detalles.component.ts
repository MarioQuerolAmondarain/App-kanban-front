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
  editarTareaForm!: FormGroup;

  estadosTarea = {
    toDo: EstadoTareas.TODO,
    doing: EstadoTareas.DOING,
    done: EstadoTareas.DONE,
  };
  prioridadesTarea = [
    PrioridadTareas.SOMEDAY,
    PrioridadTareas.LOW,
    PrioridadTareas.MEDIUM,
    PrioridadTareas.HIGH,
    PrioridadTareas.VERYHIGH,
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private todolistService: TodolistService,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.tarea = this.data.tarea;
    this.loadFormValues();
  }

  editarTarea() {

    this.snackBar.open('¡Tarea modificada!', '', {
      duration: 2000,
    });
  }

  initForm(){
    this.editarTareaForm = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
      fechaLimite: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      prioridad: new FormControl('', [Validators.required]),
    });
  }
  loadFormValues(){
    this.editarTareaForm.setValue({
      descripcion: this.tarea.descripcion,
      fechaLimite: this.tarea.fechaLimite,
      estado: this.tarea.estado,
      prioridad: this.tarea.prioridad
    });
  }

  obtenerPrioridadNombre(prioridad: PrioridadTareas): string{
    if(prioridad === PrioridadTareas.SOMEDAY){
      return "Someday"
    } else if(prioridad === PrioridadTareas.LOW){
      return "Low"
    } else if(prioridad === PrioridadTareas.MEDIUM){
      return "Medium"
    } else if(prioridad === PrioridadTareas.HIGH){
      return "High"
    }
    return "VeryHigh";
  }

}
