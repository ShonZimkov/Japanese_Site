import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { WordsComponent } from './words/words.component';
  
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'words', component : WordsComponent},
  {path : 'crud', component : CrudComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }