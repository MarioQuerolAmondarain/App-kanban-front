import { PrioridadTareas } from './../models/PrioridadTareas.enum';
import { Tarea } from './../models/tarea.model';
import { TodolistService } from './../todolist.service';
import { EstadoTareas } from './../models/estadoTareas.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss'],
})
export class NuevaTareaComponent implements OnInit {
  nuevaTareaForm!: FormGroup;
  estadosTarea = {
    toDo: EstadoTareas.TODO,
    doing: EstadoTareas.DOING,
    done: EstadoTareas.DONE
  };
  prioridadesTarea = [
    PrioridadTareas.SOMEDAY,
    PrioridadTareas.LOW,
    PrioridadTareas.MEDIUM,
    PrioridadTareas.HIGH,
    PrioridadTareas.VERYHIGH,
  ];

  constructor(private todolistService: TodolistService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
   this.initForm();
  }

  crearTarea() {
    let nuevaTarea = new Tarea(
      this.nuevaTareaForm.get('titulo')?.value,
      this.nuevaTareaForm.get('descripcion')?.value,
      this.nuevaTareaForm.get('fechaLimite')?.value,
      this.nuevaTareaForm.get('estado')?.value,
      this.nuevaTareaForm.get('prioridad')?.value,
    );
    this.todolistService.addTarea(nuevaTarea);
    this.snackBar.open("¡Tarea creada!", "", {
      duration: 2000
    });
  }
  initForm(){
    this.nuevaTareaForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fechaLimite: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      prioridad: new FormControl('', Validators.required),
    });
  }

  obtenerPrioridadNombre(prioridad: PrioridadTareas): string{
    if(prioridad === PrioridadTareas.SOMEDAY){
      return PrioridadTareas.SOMEDAY + " - Someday";
    } else if(prioridad === PrioridadTareas.LOW){
      return PrioridadTareas.LOW + " - Low";
    } else if(prioridad === PrioridadTareas.MEDIUM){
      return PrioridadTareas.MEDIUM + " - Medium";
    } else if(prioridad === PrioridadTareas.HIGH){
      return PrioridadTareas.HIGH + " - High";
    }
    return PrioridadTareas.VERYHIGH + " - VeryHigh";
  }
}
