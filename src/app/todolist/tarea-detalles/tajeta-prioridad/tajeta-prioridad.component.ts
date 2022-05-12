import { PrioridadTareas } from './../../models/PrioridadTareas.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tajeta-prioridad',
  templateUrl: './tajeta-prioridad.component.html',
  styleUrls: ['./tajeta-prioridad.component.scss'],
})
export class TajetaPrioridadComponent implements OnInit {
  @Input() prioridad!: PrioridadTareas;
  someday = PrioridadTareas.SOMEDAY;
  low = PrioridadTareas.LOW;
  medium = PrioridadTareas.MEDIUM;
  high = PrioridadTareas.HIGH;
  veryhigh = PrioridadTareas.VERYHIGH;

  constructor() {
  }

  ngOnInit(): void {
  }
}
