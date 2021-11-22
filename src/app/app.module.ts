import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./store/user.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/user.effects";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TodosComponent,
    FetchDataComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      user: userReducer,
    }),
    EffectsModule.forRoot([
      UserEffects
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://rafaelnassybullin.github.io/DataRepo/ngRxtest.json
