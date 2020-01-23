import { $ActionType } from ".";
export const initActionType = "INIT";

export type InitAction = $ActionType<typeof initActionType, null>;
export function init(): InitAction {
  return {
    type: initActionType,
    payload: null,
  };
}
