import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGameComponent } from '../components/image-game/image-game.component';
import { QuizCompComponent } from '../components/quiz-comp/quiz-comp.component';
import { QuizEnglishComponent } from '../components/quiz-english/quiz-english.component';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { WordsComponent } from './words/words.component';
  
const routes: Routes = [
  {path : 'fromjapanese', component : HomeComponent},
  {path : 'fromenglish', component : QuizEnglishComponent},
  {path : 'words', component : WordsComponent},
  {path : 'crud', component : CrudComponent},
  {path : 'quiz', component : QuizCompComponent},
  {path : 'image', component : ImageGameComponent},
  // {path : 'quiz', component : },
  
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }