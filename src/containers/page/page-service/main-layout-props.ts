import { Dispatch } from "redux";
import { State } from "../../../reducers";
import { push } from "connected-react-router";
import { paths } from "../../../routes/paths";
import { MainLayoutProps } from "../../../components/template/basic";

export const CreateMenuProps = (state: State, { dispatch }: { dispatch: Dispatch }): MainLayoutProps => {
  return {
    isBorderless: true,
    isSquaredBorders: true,
    isFixedWidth: false,
    isMenuShadow: true,
    isMenuTop: true,
    topBarProps: {
      profileMenuProps: {
        user: {
          name: "test user",
          email: "test@example.com",
          role: "admin",
        },
        badgeCount: 0,
        logout: () => {
          dispatch(push(paths.login.url));
        },
      },
    },
    menuProps: {
      isMenuTop: false,
      isMobileMenuOpen: false,
      isMobileView: false,
      isLightTheme: false,
      menuLeftProps: {
        isMobileView: false,
        isMenuCollapsed: false,
        isLightTheme: false,
        onClick: (path: string) => {
          dispatch(push(path));
        },
      },
    },
  };
};
