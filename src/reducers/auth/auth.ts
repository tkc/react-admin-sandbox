import { Actions } from "../../actions";
import { initActionType } from "../../actions/init";
import * as authActions from "../../actions/auth";

export type AuthState = {
  loginLoading: boolean;
  registerloading: boolean;
  rememberPasswordloading: boolean;
  changeRememberPasswordloading: boolean;
  changePasswordloading: boolean;
};

const initialState: AuthState = {
  loginLoading: false,
  registerloading: false,
  rememberPasswordloading: false,
  changeRememberPasswordloading: false,
  changePasswordloading: false,
};

export const auth = (state: AuthState = initialState, action: Actions): AuthState => {
  switch (action.type) {
    case initActionType: {
      return initialState;
    }
    // login
    case authActions.AuthLoginRequestActionType: {
      return { ...state, loginLoading: true };
    }
    case authActions.AuthLoginSuccessActionType: {
      return { ...state, loginLoading: false };
    }
    case authActions.AuthLoginFailActionType: {
      return { ...state, loginLoading: false };
    }
    // Register
    case authActions.AuthRegisterRequestActionType: {
      return { ...state, registerloading: true };
    }
    case authActions.AuthRegisterSuccessActionType: {
      return { ...state, registerloading: false };
    }
    case authActions.AuthRegisterFailActionType: {
      return { ...state, registerloading: false };
    }
    // Remenber Password
    case authActions.AuthRemenberPasswordRequestActionType: {
      return { ...state, rememberPasswordloading: true };
    }
    case authActions.AuthRemenberPasswordSuccessActionType: {
      return { ...state, rememberPasswordloading: false };
    }
    case authActions.AuthRemenberPasswordFailActionType: {
      return { ...state, rememberPasswordloading: false };
    }
    // Change Password
    case authActions.AuthChangePasswordRequestActionType: {
      return { ...state, changePasswordloading: true };
    }
    case authActions.AuthChangePasswordSuccessActionType: {
      return { ...state, changePasswordloading: false };
    }
    case authActions.AuthChangePasswordFailActionType: {
      return { ...state, changePasswordloading: false };
    }
    default:
      break;
  }
  return state;
};
