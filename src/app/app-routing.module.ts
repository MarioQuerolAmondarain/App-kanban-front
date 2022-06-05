import { TodasTareasComponent } from './todolist/todas-tareas/todas-tareas.component';
import { NuevaTareaComponent } from './todolist/nueva-tarea/nueva-tarea.component';
import { CalendarComponent } from './todolist/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist/todolist.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'calendario', component: CalendarComponent },
  { path: 'todas-tareas', component: TodasTareasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
