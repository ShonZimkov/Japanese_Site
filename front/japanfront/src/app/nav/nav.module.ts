import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { HomeComponent } from './home/home.component';
import { WordsComponent } from './words/words.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import {  MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    HomeComponent,
    WordsComponent,
    CrudComponent,
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule,
    MatGridListModule
    
  ]
})
export class NavModule { }
