import { Dispatch } from "redux";
import * as models from "../../../models/index";

import {
  UserCreateRequest,
  UserCreateSuccess,
  UserCreateFail,
  UserListRequest,
  UserListSuccess,
  UserListFail,
} from "../../actions/user";

// import { ShowToaster } from "../../helper/toaster";
// import * as api from "../../apis";

export async function UpdateUser(dispatch: Dispatch, payload: any) {
  try {
    dispatch(UserCreateRequest());
    // await api.PutUsers({ payload });
    // const { data } = await api.GetUsers();
    dispatch(UserCreateSuccess());
    // dispatch(UserListSuccess(data.list));
    // ShowToaster("Success", "create new user", "positive", 3000);
  } catch (e) {
    dispatch(UserCreateFail());
    // ShowToaster("Error", "create new user", "negative", 3000);
  }
}

export async function ListUser(dispatch: Dispatch) {
  try {
    dispatch(UserListRequest());
    // const { data } = await api.GetUsers();
    // dispatch(UserListSuccess(data.list));
  } catch (e) {
    dispatch(UserListFail());
    // ShowToaster("Error", "list user", "negative", 3000);
  }
}

export async function DeleteUser(dispatch: Dispatch, payload: { email: string }) {
  try {
    // await api.DeleteUsers({ payload });
    // const { data } = await api.GetUsers();
    // dispatch(UserListSuccess(data.list));
    // ShowToaster("Success", "delete user", "positive", 3000);
  } catch (e) {
    dispatch(UserListFail());
    // ShowToaster("Error", "delete user", "negative", 3000);
  }
}
