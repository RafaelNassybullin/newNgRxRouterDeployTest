import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {TodosComponent} from "./todos/todos.component";
import {FetchDataComponent} from "./fetch-data/fetch-data.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'todos', component: TodosComponent},
  {path:'fetch-data', component: FetchDataComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
