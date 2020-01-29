import { Actions } from "../../actions";
import { initActionType } from "../../actions/init";
import * as UserActions from "../../actions/user";
import * as Models from "types/models";

export type User = {
  loading: boolean;
  users: Models.User[];
};

const initialState: User = {
  loading: false,
  users: [],
};

export const user = (state: User = initialState, action: Actions): User => {
  switch (action.type) {
    case initActionType: {
      return initialState;
    }
    case UserActions.UserCreateRequestActionType: {
      return { ...state, loading: true };
    }
    case UserActions.UserCreateSuccessActionType: {
      return { ...state, loading: false };
    }
    case UserActions.UserCreateFailActionType: {
      return { ...state, loading: false };
    }
    case UserActions.UserListRequestActionType: {
      return { ...state, loading: true };
    }
    case UserActions.UserListSuccessActionType: {
      return { ...state, loading: false, users: action.payload };
    }
    case UserActions.UserListFailActionType: {
      return { ...state, loading: false };
    }
    default:
      break;
  }
  return state;
};
