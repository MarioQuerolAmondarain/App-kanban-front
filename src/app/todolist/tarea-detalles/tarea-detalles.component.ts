import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.component.html',
  styleUrls: ['./tarea-detalles.component.scss']
})
export class TareaDetallesComponent implements OnInit {
  tarea!: Tarea;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tarea = this.data.tarea;
  }

}
