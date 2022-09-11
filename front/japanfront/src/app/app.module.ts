import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { FilterPipe } from './pipes/filter.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatButtonModule} from '@angular/material/button';
import { FilterTransPipe } from './pipes/filterTrans.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { QuizEnglishComponent } from './components/quiz-english/quiz-english.component';
import {MatCardModule} from '@angular/material/card';
import { QuizCompComponent } from './components/quiz-comp/quiz-comp.component';
import { ImageGameComponent } from './components/image-game/image-game.component';
import { CommonModule } from '@angular/common';  
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterTransPipe,
    QuizEnglishComponent,
    QuizCompComponent,
    ImageGameComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    MatInputModule,
    MatButtonModule,
    NavModule,
    MatSliderModule,
    NgbModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
