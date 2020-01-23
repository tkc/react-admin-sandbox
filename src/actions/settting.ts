import { $ActionType } from ".";
export const SettingSetSettingActionType = "SETTING/SET_STATE";
export const SettingChangeSettingActionType = "SETTING/CHANGE-SETTING";

export type SettingSetSettingAction = $ActionType<
  typeof SettingSetSettingActionType,
  ReturnType<typeof SettingSetSetting>["payload"]
>;
export function SettingSetSetting() {
  return {
    type: SettingSetSettingActionType,
    payload: null,
  };
}

export type SettingChangeSettingAction = $ActionType<
  typeof SettingChangeSettingActionType,
  ReturnType<typeof SettingChangeSetting>["payload"]
>;
export function SettingChangeSetting() {
  return {
    type: SettingChangeSettingActionType,
    payload: null,
  };
}

export type SettingActions = SettingSetSettingAction | SettingChangeSettingAction;
