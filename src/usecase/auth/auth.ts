import { Dispatch } from "redux";
import { push } from "connected-react-router";
// import * as api from "../../apis";
// import * as models from "../../../models/index";
// import { ShowToaster } from "../../helper/toaster";
import { auth, unAuth } from "../../../src/auth/auth";
import * as actions from "../../actions/auth";
import { paths } from "../../routes/paths";

export async function login(dispatch: Dispatch, payload: any) {
  try {
    // unAuth();
    // dispatch(actions.AuthLoginRequest());
    // const { data } = await api.PostLogin({ payload });
    // auth(data.auth_token, data.user.role, data.scope, data.user.email, experimentMode);
    // dispatch(actions.AuthLoginSuccess());
    dispatch(push(paths.dashboard.url));
  } catch (e) {
    unAuth();
    if (e.data.force_password_reset) {
      dispatch(push(paths.login));
      dispatch(actions.AuthLoginFail());
    } else {
      // ShowToaster("Error", "auth login", "negative", 3000);
      dispatch(actions.AuthLoginFail());
    }
  }
}

export async function logout(dispatch: Dispatch) {
  unAuth();
  dispatch(push(paths.login));
}

export async function RegisterUser(dispatch: Dispatch, payload: any) {
  try {
    dispatch(actions.AuthRegisterRequest());
    // await api.PostRegister({ payload });
    // ShowToaster("Success", "send confirm message. please check your mail box", "positive", 20000);
    dispatch(actions.AuthRegisterSuccess());
    dispatch(push(paths.login));
  } catch (e) {
    dispatch(actions.AuthRegisterFail());
    // ShowToaster("Error", "register fail", "negative", 3000);
  }
}

export async function RememberPassword(dispatch: Dispatch, payload: any) {
  try {
    dispatch(actions.AuthRemenberPasswordRequest());
    // await api.PostRememberPassword({ payload });
    dispatch(actions.AuthRemenberPasswordSuccess());
    // ShowToaster("Success", "send confirm message. please check your mail box", "positive", 20000);
    dispatch(push(paths.login));
  } catch (e) {
    dispatch(actions.AuthRemenberPasswordFail());
    // ShowToaster("Error", "reset passwoer fail", "negative", 3000);
  }
}

export async function ValidateChangeRemenberPasswordToken(dispatch: Dispatch, token: string) {
  try {
    dispatch(actions.AuthRememberPasswordTokenRequest());
    // await api.PostValidateRemenberPasswordToken(token);
    dispatch(actions.AuthRememberPasswordTokenSuccess());
  } catch (e) {
    dispatch(actions.AuthRememberPasswordTokenFail());
    dispatch(push(paths.login));
  }
}

export async function ChangePasseword(dispatch: Dispatch, payload: any) {
  try {
    dispatch(actions.AuthChangePasswordRequest());
    // await api.PutChangePassword({ payload });
    // dispatch(actions.AuthChangePasswordSuccess());
    // ShowToaster("Success", "change passwrd", "positive", 3000);
  } catch (e) {
    switch (e.code) {
      case 403:
        // ShowToaster("Error", "no permission", "negative", 3000);
        break;
      default:
        // ShowToaster("Error", "change passwoer fail", "negative", 3000);
        break;
    }
    dispatch(actions.AuthChangePasswordFail());
  }
}

export async function ChangeRememeberPasseword(
  dispatch: Dispatch,
  token: string,
  // payload: models.ChangeRememberPasswordPayload,
) {
  try {
    // dispatch(actions.AuthChangeRememberPasswordRequest());
    // await api.PatchChangetRememeberPasseword(token, { payload });
    // ShowToaster("Success", "change passwrd. please login", "positive", 20000);
    dispatch(actions.AuthChangeRememberPasswordSuccess());
    dispatch(push(paths.login));
  } catch (e) {
    switch (e.code) {
      case 400:
        // ShowToaster("Error", "invalid password", "negative", 3000);
        break;
      case 403:
        // ShowToaster("Error", "invalid token", "negative", 3000);
        break;
      default:
        // ShowToaster("Error", "change passwoer fail", "negative", 3000);
        break;
    }
    dispatch(actions.AuthChangeRememberPasswordFail());
  }
}
