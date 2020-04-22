import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThisWeekComponent} from './this-week/this-week.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {path:'thisweek', component: ThisWeekComponent},
  {path:'today', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
