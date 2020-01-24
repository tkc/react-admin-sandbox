import React from "react";
import DrawerMenu from "rc-drawer";
import { MenuLeft, MenuLeftProps } from "./menu-left";
import MenuTop from "./menu-top";

export interface OwnState {
  selectedKeys: any;
  openedKeys: any;
}

export interface MenuProps {
  isMenuTop: boolean;
  isMobileMenuOpen: boolean;
  isMobileView: boolean;
  isLightTheme: boolean;
  menuLeftProps: MenuLeftProps;
}

export class Menu extends React.Component<MenuProps, OwnState> {
  toggleOpen = () => {};
  render() {
    const { isMenuTop, isMobileMenuOpen, isMobileView, isLightTheme } = this.props;
    const BootstrappedMenu = () => {
      if (isMobileView) {
        return (
          <DrawerMenu
            getContainer={null}
            level={null}
            open={isMobileMenuOpen}
            onHandleClick={this.toggleOpen}
            className={isLightTheme ? "drawer-light" : ""}
          >
            <MenuLeft {...this.props.menuLeftProps} />
          </DrawerMenu>
        );
      }
      if (isMenuTop) {
        return <MenuTop />;
      }
      return <MenuLeft {...this.props.menuLeftProps} />;
    };
    return BootstrappedMenu();
  }
}
