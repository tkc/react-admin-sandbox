import store from "store";
import { Actions } from "../../actions";
import * as settingActions from "../../actions/settting";

// const STORED_SETTINGS = storedSettings => {
//   const settings: any = {};
//   Object.keys(storedSettings).forEach(key => {
//     const item = store.get(`app.settings.${key}`);
//     settings[key] = typeof item !== "undefined" ? item : storedSettings[key];
//   });
//   return settings;
// };

// const initialState = {
//   ...STORED_SETTINGS({
//     isMobileView: false,
//     isMobileMenuOpen: false,
//     isLightTheme: true,
//     isSettingsOpen: false,
//     isMenuTop: false,
//     isMenuCollapsed: false,
//     isBorderless: true,
//     isSquaredBorders: false,
//     isFixedWidth: false,
//     isMenuShadow: true,
//     locale: "en-US",
//   }),
// };

export type SettingState = {
  isMobileView: boolean;
  isMobileMenuOpen: boolean;
  isLightTheme: boolean;
  isSettingsOpen: boolean;
  isMenuTop: boolean;
  isMenuCollapsed: boolean;
  isBorderless: boolean;
  isSquaredBorders: boolean;
  isFixedWidth: boolean;
  isMenuShadow: boolean;
  locale: string;
};

const initialState: SettingState = {
  isMobileView: false,
  isMobileMenuOpen: false,
  isLightTheme: true,
  isSettingsOpen: false,
  isMenuTop: false,
  isMenuCollapsed: false,
  isBorderless: true,
  isSquaredBorders: false,
  isFixedWidth: false,
  isMenuShadow: true,
  locale: "en-US",
};

export const setting = (state: SettingState = initialState, action: Actions): SettingState => {
  switch (action.type) {
    case settingActions.SettingChangeSettingActionType:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
