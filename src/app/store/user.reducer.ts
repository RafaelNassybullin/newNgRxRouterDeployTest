import {User} from "./user.model";
import {createReducer, on} from "@ngrx/store";
import {addUser, addUserList, deleteUser} from "./user.action";

export interface UserState {
  userList:Array<User>
}

export const initialStateUser:UserState = {
  userList:[]
}

export const userReducer = createReducer(
  initialStateUser,

  on(addUser,(state, {user})=>({
    ...state,
    userList:[...state.userList, user]
  })),

  on(addUserList,(state, {user})=>({
    ...state,
    userList:[ ...state.userList, ...user]
  })),

  on(deleteUser,(state,{id})=>({
    ...state,
    userList: state.userList.filter((us)=>us.id != id)
  }))
)
