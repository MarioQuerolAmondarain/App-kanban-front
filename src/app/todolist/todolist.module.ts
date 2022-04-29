import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    TodolistComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodolistModule { }
