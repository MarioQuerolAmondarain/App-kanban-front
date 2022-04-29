import { EstadoTareas } from './../models/estadoTareas.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss']
})
export class NuevaTareaComponent implements OnInit {
  nuevaTareaForm!: FormGroup;
  toDo = EstadoTareas.TODO;
  doing = EstadoTareas.DOING;
  done = EstadoTareas.DONE;
  constructor() { }

  ngOnInit(): void {
    this.nuevaTareaForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fechaLimite: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)
    });
  }

  crearTarea(){
    console.log("Nueva tarea");
  }
}
