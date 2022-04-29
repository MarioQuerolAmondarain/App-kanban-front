import { TodolistModule } from './../todolist/todolist.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    TodolistModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    HomeComponent,
    SidenavComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
