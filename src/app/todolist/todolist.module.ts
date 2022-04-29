import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CalendarComponent } from './calendar/calendar.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TodolistComponent } from './todolist/todolist.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    TodolistComponent,
    CalendarComponent,
    NuevaTareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodolistModule { }
