import { CalendarComponent } from './todolist/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist/todolist.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'calendario', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
