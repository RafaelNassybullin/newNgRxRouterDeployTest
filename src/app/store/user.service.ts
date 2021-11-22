import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http:HttpClient
  ) {

  }
  getUser():Observable<[]>{
    return this.http.get<[]>('https://rafaelnassybullin.github.io/DataRepo/ngRxtest.json')

  }
}
