import { InitAction } from "./init";
import { UserActions } from "./user";
import { AuthActions } from "./auth";
import { SettingActions } from "./settting";

export interface $ActionType<T, P> {
  type: T;
  payload: P;
}

export type Actions = InitAction | UserActions | AuthActions | SettingActions;
