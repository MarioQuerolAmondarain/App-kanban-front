import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  todolist: string = "/todolist";
  calendario: string = "/calendario";

  constructor() { }

  ngOnInit(): void {
  }

}
