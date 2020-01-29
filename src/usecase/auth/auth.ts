import { Dispatch } from "redux";
import { push } from "connected-react-router";
import * as api from "../../../apis";
import * as payloads from "../../../types/payloads";
import * as actions from "../../actions/auth";
import { paths } from "../../routes/paths";

export async function login(dispatch: Dispatch, payload: payloads.Login) {
  try {
    dispatch(actions.AuthLoginRequest());
    const { data } = await api.Login(payload);
    dispatch(actions.AuthLoginSuccess(data));
    dispatch(push(paths.dashboard.url));
  } catch (e) {
    if (e.data.force_password_reset) {
      dispatch(push(paths.login));
      dispatch(actions.AuthLoginFail());
    } else {
      dispatch(actions.AuthLoginFail());
    }
  }
}

export async function logout(dispatch: Dispatch) {
  dispatch(push(paths.login));
}
