import { $ActionType } from ".";
import * as models from "types/models";

export const UserCreateRequestActionType = "USERCREATE/REQUEST";
export const UserCreateSuccessActionType = "USERCREATE/SUCCESS";
export const UserCreateFailActionType = "USERCREATE/FAIL";

export const UserListRequestActionType = "USERLIST/REQUEST";
export const UserListSuccessActionType = "USERLIST/SUCCESS";
export const UserListFailActionType = "USERLIST/FAIL";

export type UserCreateRequestAction = $ActionType<
  typeof UserCreateRequestActionType,
  ReturnType<typeof UserCreateRequest>["payload"]
>;
export function UserCreateRequest() {
  return {
    type: UserCreateRequestActionType,
    payload: null,
  };
}

export type UserCreateSuccessAction = $ActionType<
  typeof UserCreateSuccessActionType,
  ReturnType<typeof UserCreateSuccess>["payload"]
>;
export function UserCreateSuccess() {
  return {
    type: UserCreateSuccessActionType,
    payload: null,
  };
}

export type UserCreateFail = $ActionType<typeof UserCreateFailActionType, ReturnType<typeof UserCreateFail>["payload"]>;
export function UserCreateFail() {
  return {
    type: UserCreateFailActionType,
    payload: null,
  };
}

export type UserListRequestAction = $ActionType<
  typeof UserListRequestActionType,
  ReturnType<typeof UserListRequest>["payload"]
>;
export function UserListRequest() {
  return {
    type: UserListRequestActionType,
    payload: null,
  };
}

export type UserListSuccessAction = $ActionType<
  typeof UserListSuccessActionType,
  ReturnType<typeof UserListSuccess>["payload"]
>;
export function UserListSuccess(users: models.User[]) {
  return {
    type: UserListSuccessActionType,
    payload: users,
  };
}

export type UserListFailAction = $ActionType<typeof UserListFailActionType, ReturnType<typeof UserListFail>["payload"]>;
export function UserListFail() {
  return {
    type: UserListFailActionType,
    payload: null,
  };
}

export type UserActions =
  | UserCreateRequestAction
  | UserCreateSuccessAction
  | UserCreateFail
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailAction;
