import { TareaDetallesComponent } from './../tarea-detalles/tarea-detalles.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Tarea } from '../models/tarea.model';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.scss'],
})
export class TareaCardComponent implements OnInit {
  @Input() tarea!: Tarea;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  verTarea() {
    this.dialog.open(
      TareaDetallesComponent,
      {
        width: '400px',
        height: 'fit-content',
        data: {
          tarea: this.tarea,
        },
      }
    );
  }
}
