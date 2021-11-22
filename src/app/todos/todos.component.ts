import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/appState";
import {addUser, addUserList, deleteUser, loadDataFromApi} from '../store/user.action';
import {User} from "../store/user.model";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todos',
  template: `
    <div class="todo-wrap">
      <button (click)="addUser()">Add</button>
      <button (click)="addUserList()">AddList</button>
      <button (click)="loadFromApi()">LoadDataFromApi</button>
      <div class="list" *ngIf="(userObsr | async) as userObsr">
        <div class="block" *ngFor="let userr of userObsr.userList">
          <p>{{userr.id}}</p>
          <p>{{userr.name}}</p>
          <p>{{userr.address}}</p>
          <button (click)="deleteUser(userr)">Delete</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  userObsr: Observable<any> = this.store.select("user")

  constructor(public store: Store<AppState>) {




    this.store.dispatch(loadDataFromApi())



    console.log(this.store);
  }//DI Store

  ngOnInit(): void {
    // this.userObsr.subscribe((user) => console.log(user))}////////



  }

  addUser() {
    this.store.dispatch(addUser({
      user: {
        name: 'Rafa',
        address: 'Astana',
        id: uuidv4()
      }
    }))
  }

  addUserList() {
    this.store.dispatch(addUserList({
      user: [
        {
          name: 'Rafa3',
          address: 'Astana',
          id: uuidv4()
        },
        {
          name: 'Reni',
          address: 'Lucksemburg',
          id: uuidv4()
        },
        {
          name: 'Jeremi',
          address: 'Malta',
          id: uuidv4()
        },
        {
          name: 'John',
          address: 'Paris',
          id: uuidv4()
        },
      ]
    }))
  }

  deleteUser(user: User) {
    this.store.dispatch(deleteUser({id: user.id}))
  }

  loadFromApi() {
    this.store.dispatch(loadDataFromApi())
  }
}
