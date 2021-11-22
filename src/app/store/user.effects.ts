import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {addUserList, loadDataFromApi} from "./user.action";
import {map, mergeMap} from "rxjs/operators";
import {UserService} from "./user.service";

@Injectable()
export class UserEffects {

  loadData = createEffect(()=>
    this.action.pipe(
      ofType(loadDataFromApi),
      mergeMap(()=>this.userServive.getUser()
        .pipe(map((users)=>addUserList({user:users}))
      ))
    )
  )
  constructor(
    public action: Actions,
    private userServive: UserService,

  ) {

}



}

