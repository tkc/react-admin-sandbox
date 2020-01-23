import { $ActionType } from ".";

// login
export const AuthLoginRequestActionType = "AUTH/LOGIN-REQUEST";
export const AuthLoginSuccessActionType = "AUTH/LOGIN-SUCCESS";
export const AuthLoginFailActionType = "AUTH/LOGIN-FAIL";
// Register
export const AuthRegisterRequestActionType = "AUTH/REGISTER-REQUEST";
export const AuthRegisterSuccessActionType = "AUTH/REGISTER-SUCCESS";
export const AuthRegisterFailActionType = "AUTH/REGISTER-FAIL";
// Remenber Password
export const AuthRemenberPasswordRequestActionType = "AUTH/REMEMBER-PASSWORD-REQUEST";
export const AuthRemenberPasswordSuccessActionType = "AUTH/REMEMBER-PASSWORD-SUCCESS";
export const AuthRemenberPasswordFailActionType = "AUTH/REMEMBER-PASSWORD-FAIL";
// Remember Password Token
export const AuthRememberPasswordTokenRequestActionType = "AUTH/REMEMBER-PASSWORD-TOKEN-REQUEST";
export const AuthRememberPasswordTokenSuccessActionType = "AUTH/REMEMBER-PASSWORD-TOKEN-SUCCESS";
export const AuthRememberPasswordTokenFailActionType = "AUTH/REMEMBER-PASSWORD-TOKEN-FAIL";
// Change Remember Password
export const AuthChangeRememberPasswordRequestActionType = "AUTH/CHANGE-REMEMBER-PASSWORD-REQUEST";
export const AuthChangeRememberPasswordSuccessActionType = "AUTH/CHANGE-REMEMBER-PASSWORD-SUCCESS";
export const AuthChangeRememberPasswordFailActionType = "AUTH/CHANGE-REMEMBER-PASSWORD-FAIL";
// Change Password
export const AuthChangePasswordRequestActionType = "AUTH/CHANGE-PASSWORD-REQUEST";
export const AuthChangePasswordSuccessActionType = "AUTH/CHANGE-PASSWORD-SUCCESS";
export const AuthChangePasswordFailActionType = "AUTH/CHANGE-PASSWORD-FAIL";

// login
export type AuthLoginRequestAction = $ActionType<
  typeof AuthLoginRequestActionType,
  ReturnType<typeof AuthLoginRequest>["payload"]
>;
export function AuthLoginRequest() {
  return {
    type: AuthLoginRequestActionType,
    payload: null,
  };
}

export type AuthLoginSuccessAction = $ActionType<
  typeof AuthLoginSuccessActionType,
  ReturnType<typeof AuthLoginSuccess>["payload"]
>;
export function AuthLoginSuccess() {
  return {
    type: AuthLoginSuccessActionType,
    payload: null,
  };
}

export type AuthLoginFailActionType = $ActionType<
  typeof AuthLoginFailActionType,
  ReturnType<typeof AuthLoginFail>["payload"]
>;
export function AuthLoginFail() {
  return {
    type: AuthLoginFailActionType,
    payload: null,
  };
}

// Register
export type AuthRegisterRequestAction = $ActionType<
  typeof AuthRegisterRequestActionType,
  ReturnType<typeof AuthRegisterRequest>["payload"]
>;
export function AuthRegisterRequest() {
  return {
    type: AuthRegisterRequestActionType,
    payload: null,
  };
}

export type AuthRegisterSuccessAction = $ActionType<
  typeof AuthRegisterSuccessActionType,
  ReturnType<typeof AuthRegisterSuccess>["payload"]
>;
export function AuthRegisterSuccess() {
  return {
    type: AuthRegisterSuccessActionType,
    payload: null,
  };
}

export type AuthRegisterailAction = $ActionType<
  typeof AuthRegisterFailActionType,
  ReturnType<typeof AuthRegisterFail>["payload"]
>;
export function AuthRegisterFail() {
  return {
    type: AuthRegisterFailActionType,
    payload: null,
  };
}

// Remenber Password
export type AuthRemenberPasswordRequestAction = $ActionType<
  typeof AuthRemenberPasswordRequestActionType,
  ReturnType<typeof AuthRemenberPasswordRequest>["payload"]
>;
export function AuthRemenberPasswordRequest() {
  return {
    type: AuthRemenberPasswordRequestActionType,
    payload: null,
  };
}

export type AuthRemenberPasswordSuccessAction = $ActionType<
  typeof AuthRemenberPasswordSuccessActionType,
  ReturnType<typeof AuthRemenberPasswordSuccess>["payload"]
>;
export function AuthRemenberPasswordSuccess() {
  return {
    type: AuthRemenberPasswordSuccessActionType,
    payload: null,
  };
}

export type AuthRemenberPasswordFailAction = $ActionType<
  typeof AuthRemenberPasswordFailActionType,
  ReturnType<typeof AuthRemenberPasswordFail>["payload"]
>;
export function AuthRemenberPasswordFail() {
  return {
    type: AuthRemenberPasswordFailActionType,
    payload: null,
  };
}

// Remember Password Token
export type AuthRememberPasswordTokenRequestAction = $ActionType<
  typeof AuthRememberPasswordTokenRequestActionType,
  ReturnType<typeof AuthRememberPasswordTokenRequest>["payload"]
>;
export function AuthRememberPasswordTokenRequest() {
  return {
    type: AuthRememberPasswordTokenRequestActionType,
    payload: null,
  };
}

export type AuthRememberPasswordTokenSuccessAction = $ActionType<
  typeof AuthRememberPasswordTokenSuccessActionType,
  ReturnType<typeof AuthRememberPasswordTokenSuccess>["payload"]
>;
export function AuthRememberPasswordTokenSuccess() {
  return {
    type: AuthRememberPasswordTokenSuccessActionType,
    payload: null,
  };
}

export type AuthRememberPasswordTokenFailAction = $ActionType<
  typeof AuthRememberPasswordTokenFailActionType,
  ReturnType<typeof AuthRememberPasswordTokenFail>["payload"]
>;
export function AuthRememberPasswordTokenFail() {
  return {
    type: AuthRememberPasswordTokenFailActionType,
    payload: null,
  };
}

// Change Remember Password
export type AuthChangeRememberPasswordRequestAction = $ActionType<
  typeof AuthChangeRememberPasswordRequestActionType,
  ReturnType<typeof AuthChangeRememberPasswordRequest>["payload"]
>;
export function AuthChangeRememberPasswordRequest() {
  return {
    type: AuthChangeRememberPasswordRequestActionType,
    payload: null,
  };
}

export type AuthChangeRememberPasswordSuccessAction = $ActionType<
  typeof AuthChangeRememberPasswordSuccessActionType,
  ReturnType<typeof AuthChangeRememberPasswordSuccess>["payload"]
>;
export function AuthChangeRememberPasswordSuccess() {
  return {
    type: AuthChangeRememberPasswordSuccessActionType,
    payload: null,
  };
}

export type AuthChangeRememberPasswordFailAction = $ActionType<
  typeof AuthChangeRememberPasswordFailActionType,
  ReturnType<typeof AuthChangeRememberPasswordFail>["payload"]
>;
export function AuthChangeRememberPasswordFail() {
  return {
    type: AuthChangeRememberPasswordFailActionType,
    payload: null,
  };
}

// Change Password
export type AuthChangePasswordRequestAction = $ActionType<
  typeof AuthChangePasswordRequestActionType,
  ReturnType<typeof AuthChangePasswordRequest>["payload"]
>;
export function AuthChangePasswordRequest() {
  return {
    type: AuthChangePasswordRequestActionType,
    payload: null,
  };
}

export type AuthChangePasswordSuccessAction = $ActionType<
  typeof AuthChangePasswordSuccessActionType,
  ReturnType<typeof AuthChangePasswordSuccess>["payload"]
>;
export function AuthChangePasswordSuccess() {
  return {
    type: AuthChangePasswordSuccessActionType,
    payload: null,
  };
}

export type AuthChangePasswordFailAction = $ActionType<
  typeof AuthChangePasswordFailActionType,
  ReturnType<typeof AuthChangePasswordFail>["payload"]
>;
export function AuthChangePasswordFail() {
  return {
    type: AuthChangePasswordFailActionType,
    payload: null,
  };
}

export type AuthActions =
  | AuthLoginRequestAction
  | AuthLoginSuccessAction
  | AuthLoginFailActionType
  | AuthRegisterRequestAction
  | AuthRegisterSuccessAction
  | AuthRegisterailAction
  | AuthRemenberPasswordRequestAction
  | AuthRemenberPasswordSuccessAction
  | AuthRemenberPasswordFailAction
  | AuthRememberPasswordTokenRequestAction
  | AuthRememberPasswordTokenSuccessAction
  | AuthRememberPasswordTokenFailAction
  | AuthChangeRememberPasswordRequestAction
  | AuthChangeRememberPasswordSuccessAction
  | AuthChangeRememberPasswordFailAction
  | AuthChangePasswordRequestAction
  | AuthChangePasswordSuccessAction
  | AuthChangePasswordFailAction;
