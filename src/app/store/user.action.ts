import {createAction, props} from "@ngrx/store";
import {User} from "./user.model";

export const addUser = createAction(
  "[ADD USER]",
  props<{user:User}>()
)

export const addUserList = createAction(
  "[ADD USER LIST]",
  props<{user:Array<User>}>()
)

export const deleteUser = createAction(
  "[DELETE USER]",
  props<{id:string}>()
)

export const loadDataFromApi = createAction(
  "[LOAD DATA FROM API]")
