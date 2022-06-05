import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CalendarComponent } from './calendar/calendar.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TableroComponent } from './tablero/tablero.component';
import { TablerosComponent } from './tableros/tableros.component';
import { TareaCardComponent } from './tarea-card/tarea-card.component';
import { TareaDetallesComponent } from './tarea-detalles/tarea-detalles.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodasTareasComponent } from './todas-tareas/todas-tareas.component';

@NgModule({
  declarations: [
    TodolistComponent,
    CalendarComponent,
    NuevaTareaComponent,
    TablerosComponent,
    TableroComponent,
    TareaCardComponent,
    TareaDetallesComponent,
    TodasTareasComponent
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
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatNativeDateModule,
    DragDropModule,
    MatDividerModule,
    MatMenuModule
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodolistModule { }
